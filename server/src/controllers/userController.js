const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const db = require('../config/db')
// const User = require('../models/User');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');
const { oauth2Client } = require('../config/googleConfig');
const { sendEmail } = require('../utils/utils');
const crypto = require('crypto')
dotEnv.config({
    path: '../config.env'
})

// const FRONTEND_URL = 'http://localhost:3000'
const FRONTEND_URL = 'https://frontend-dot-talganize-dev.uc.r.appspot.com'

exports.getUser = async (req, res) => {

    // try {
    //     const userId = req.params.userId
    //     console.log('user', userId)

    //     const user = await User.findByPk(userId)
    //     if (!user) {
    //         return res.status(404).json({ message: "User not found" })
    //     }

    // } catch (error) {

    // }
}


exports.googleAuth = async (req, res) => {
    console.log('google auth');

    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const GOOGLE_SECRET = process.env.GOOGLE_SECRET;


    const REDIRECT_URI = "http://localhost:8080/api/auth/google/callback";
    const googleAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&scope=openid%20email%20profile&redirect_uri=${REDIRECT_URI}&prompt=consent`;
    res.redirect(googleAuthURL);
}

// exports.loginWithGoogle = (req, res) => {

// try {

//     const code = req.body.code;
//     console.log('code', code);

//     // Get tokens from Google using the auth code
//     oauth2Client.getToken(code).then((googleRes) => {
//         console.log('google res', googleRes);

//         const user = jwt.decode(googleRes.tokens.id_token);

//         const { given_name, email, family_name, email_verified, picture } = user;
//         console.log('data', given_name);
//     })



// } catch (error) {
//     console.log('error', error);

// }
// }

exports.loginWithGoogle = async (req, res) => {

    try {
        const code = req.body.code;

        const googleRes = await oauth2Client.getToken(code)
        const user = jwt.decode(googleRes.tokens.id_token)

        const { given_name, email, family_name, email_verified, picture } = user

        const getQuery = `select user.id, user.first_name, user.middle_name, user.last_name, user.user_type_id, user.email, user.phone, userType.type_name 
                        from users as user Left Join user_type as userType
                        on user.user_type_id = userType.id
                         where email = ?`

        const [userInfo, fields] = await db.query(getQuery, [email])

        if (userInfo && userInfo.length > 0) {

            userInfo[0]['email_verified'] = email_verified;
            userInfo[0]['picture'] = picture;
            userInfo[0]['family_name'] = family_name;


            res.status(200).json({
                message: "User already exist",
                user: userInfo[0],
                token: googleRes.tokens.id_token
            })


        } else {

            //Create user if user doesn't exists

            const createUser = `INSERT INTO users (first_name, last_name, user_type_id, email, updated_at)
                                values(?,?,?,?,?)`
            const [result, fields] = await db.query(createUser, [given_name, family_name, 1, email, new Date()])

            if (result.affectedRows === 1) {
                res.status(201).json({
                    message: "User created."
                })
            } else {
                res.status(500).json({
                    message: "Unable to create user."
                })
            }

        }


    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error })
    }

}

exports.checkDatabaseConnection = async (req, res) => {

    const query = 'SELECT * from users where id = 1'
    const [result, fields] = await db.query(query)

    res.send({
        status: true,
        user: result,
        message: "Databse connected"
    })
}

exports.testServerStatus = async (req, res) => {
    console.log('server testing.')
    res.send({
        status: true,
        message: "Server is running.."
    })
}

exports.googleAuthCallback = async (req, res) => {
    const code = req.query.code;

    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
    const REDIRECT_URI = "http://localhost:8080/api/auth/google/callback";
    try {
        // Exchange code for tokens
        const { data } = await axios.post("https://oauth2.googleapis.com/token", {
            code,
            client_id: GOOGLE_CLIENT_ID,
            client_secret: GOOGLE_SECRET,
            redirect_uri: REDIRECT_URI,
            grant_type: "authorization_code",
        });


        const { id_token } = data;

        // Decode user info
        const userInfo = jwt.decode(id_token);


        // Create JWT for session (optional)
        const sessionToken = jwt.sign({ email: userInfo.email }, "secret", { expiresIn: "1h" });

        res.cookie("token", sessionToken, { httpOnly: true });
        res.redirect("http://localhost:3000/jobs"); // redirect to dashboard or home



    } catch (err) {
        console.error("Error verifying Google login:", err);
        res.status(500).send("Login failed");
    }
}

exports.registerUser = async (req, res) => {
    try {

        const { firstName, middleName, lastName, email, password, userType } = req.body;

        if (!firstName || !lastName || !email || !password || !userType) {
            return res.status(400).json({ message: 'Mandatory fields must be filled.' });
        }


        let fetchUserQuery = 'SELECT * FROM users WHERE email = ?';
        const [result, fields1] = await db.query(fetchUserQuery, [email])


        if (result && result.length > 0) {
            res.status(400).json({
                status: false,
                message: "User already exists, please login."
            })
        } else {
            const hashedPassword = await bcrypt.hash(password, salt);
            const userTypeId = userType === "JobSeeker" ? 1 : 2

            const mName = middleName?.trim() === "" || middleName === undefined || middleName === null ? null : middleName

            let insertUserQuery = 'INSERT INTO users (first_name, middle_name, last_name, user_type_id, email, password ) VALUES (?, ?, ?, ?, ?, ?)';

            const [insertUserResult, fields2] = await db.query(insertUserQuery, [firstName, mName, lastName, userTypeId, email, hashedPassword])

            if (insertUserResult && insertUserResult.affectedRows === 1) {
                const uniqueId = crypto.randomBytes(16).toString('hex');
                const userId = insertUserResult.insertId

                const insertUniqueId = 'INSERT INTO email_verification(email, unique_id) values(?, ?)'

                const [insertIdResult, fields3] = await db.query(insertUniqueId, [email, uniqueId])


                if (insertIdResult.affectedRows > 0) {
                    let subject = "Email Verification - Talganize"
                    let html = `<h4>Welcome to Talganize<h4><p>Please verify your email by clicking on the link ${FRONTEND_URL}/email-verification/${uniqueId}</p>`
                    let emailResult = await sendEmail(email, subject, html)

                    if (emailResult.emailStatus) {
                        res.status(201).json({
                            status: true,
                            userId: userId,
                            message: "Verification link is sent to your mail id."
                        })
                    } else {
                        res.status(201).json({
                            status: false,
                            message: "Unable to send verification link."
                        })
                    }
                } else {
                    res.status(500).json({ status: false, message: "Unable to save link." })
                }

            } else {
                res.status(500).json({
                    status: false,
                    message: "Unable to create user."
                })
            }

        }

    } catch (error) {
        return res.status(500).json({ status: false, message: 'Server error', error: error.message });
    }

};

exports.loginUser = async (req, res) => {

    try {

        const email = req.body.email;
        const userPassword = req.body.password;


        const getUser = `select user.*, type.type_name from users as user
                         left join user_type as type on user.user_type_id = type.id where email = ?`

        let [result, fields] = await db.query(getUser, [email])


        if (!result || result.length === 0) {
            return res.status(404).json({ message: "User not found" })
        }
        var isSame = bcrypt.compareSync(userPassword, result[0]['password']);

        delete result[0].password

        if (isSame) {
            const sessionToken = jwt.sign(
                {
                    email: result[0].email,
                    first_name: result[0].first_name,
                    last_name: result[0].last_name,
                    user_type_id: result[0].user_type_id,
                    type_name: result[0].type_name
                }, "secret");


            res.status(200).json({
                status: true,
                message: "Login successful.",
                user: result[0],
                token: sessionToken
            })
        } else {
            res.status(401).json({
                status: false,
                message: "Invalid email or password."
            })
        }

    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.verifyEmailToken = async (req, res) => {
    try {

        const uniqueId = req.body.uniqueId;

        const query = 'SELECT * from email_verification where unique_id = ?'
        const [result, fields] = await db.query(query, uniqueId)

        if (result && result.length > 0) {
            const token = result[0].unique_id
            const email = result[0].email

            if (token === uniqueId) {

                const updateQuery = 'UPDATE users SET email_verified = 1 where email = ?'
                const [updateResult, fields1] = await db.query(updateQuery, email)

                if (updateResult.affectedRows === 1) {
                    res.status(200).json({
                        status: true,
                        message: "Email id verfied."
                    })
                } else {
                    res.status(401).json({
                        status: false,
                        message: "Email validation failed."
                    })
                }

            } else {
                res.status(401).json({
                    status: false,
                    message: "Invalid token."
                })
            }
        } else {
            res.status(404).json({
                status: false,
                message: "No verfication details found."
            })
        }

    } catch (error) {
        res.status(500).json({
            status: false,
            error: error.message,
            message: "Server error"
        })
    }
}

exports.sendEmailVerificationLink = async (req, res) => {
    try {
        const email = req.body.email
        const uniqueId = crypto.randomBytes(16).toString('hex');


        const insertUniqueId = 'INSERT INTO email_verification(email, unique_id) values(?, ?)'

        const [result, fields3] = await db.query(insertUniqueId, [email, uniqueId])

        if (result.affectedRows === 1) {

            let subject = "Email Verification - Talganize"
            let html = `<h4>Welcome to Talganize<h4><p>Please verify your email by clicking on the link ${FRONTEND_URL}/email-verification/${uniqueId}</p>`
            let emailResult = await sendEmail(email, subject, html)

            if (emailResult.emailStatus) {
                res.status(201).json({
                    status: true,
                    message: "Verification link is sent to your mail id."
                })
            } else {
                res.status(500).json({
                    status: false,
                    message: "Unable to send verification link."
                })
            }
        } else {
            res.status(500).json({
                status: false,
                message: "Failed to save data."
            })
        }

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Server error.",
            error: error.message
        })
    }
}


// exports.validateOTP = async (req, res) => {

//     const otp = req.body.otp;
//     const email = req.body.email;

//     const query = 'SELECT * FROM email_otp where email = ? ORDER BY id DESC LIMIT 1'
//     const [result, fields] = await db.query(query, [email])

//     if (result.length > 0) {
//         let differenceInMs = new Date() - result[0].created_at;

//         if ((differenceInMs / 60000) > 10) {
//             return res.status(400).json({
//                 status: false,
//                 message: "OTP Expired."
//             })
//         }

//         if (otp === result[0].code.toString()) {
//             res.status(200).json({
//                 status: true,
//                 message: "OTP is valid."
//             })
//         } else {
//             res.status(400).json({
//                 status: false,
//                 message: "OTP is Invalid."
//             })
//         }

//     } else {
//         res.status(404).json({
//             status: false,
//             message: "No details found."
//         })
//     }
// }