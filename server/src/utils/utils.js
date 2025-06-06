const nodemailer = require("nodemailer")
const SMTPTransport = require("nodemailer/lib/smtp-transport")


exports.sendEmail = (email, subject, html) => {

    return new Promise((resolve, reject) => {
        let mailOptions = {
            from: `Talganize <${process.env.TALGANIZE_EMAIL}>`,
            to: email,
            subject: subject,
            html: html
        }

        let transporter = nodemailer.createTransport(new SMTPTransport({
            pool: true,
            service: "gmail",
            auth: {
                user: process.env.TALGANIZE_EMAIL,
                pass: process.env.TALGANIZE_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        }));


        transporter.sendMail(mailOptions, (error, info) => {
            transporter.close()
            if (error) {
                console.log("Error while sending email:", error);
                return reject({ emailStatus: false, message: "Failed to send email.", error })
            } else {
                console.log("Email sent successfully.")
                return resolve({ emailStatus: true, message: "Email sent successfully." })
            }
        })
    })

}