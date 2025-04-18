const db = require('../config/db')


exports.addExperience = async (req, res) => {

    try {

        const userId = req.body.userId;
        const companyName = req.body.companyName;
        const jobTitle = req.body.jobTitle;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const country = req.body.country;
        const responsibility = req.body.responsibility;

        console.log(userId, companyName, jobTitle);



        const addQuery = `INSERT INTO work_experience(user_id, company_name, job_title, start_date, end_date, country, responsibility, updated_at)
                        VALUES(?, ?, ?, ?, ?, ?, ?, ?)`

        const [result, fields] = await db.query(addQuery, [userId, companyName, jobTitle, startDate, endDate, country, responsibility, new Date()])


        if (result.affectedRows === 1) {
            res.status(201).json({
                status: true,
                message: "Experience added.",
            })
        } else {
            res.statu(500).json({
                status: false,
                message: "Unable to add experience details."
            })
        }

    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }



}


