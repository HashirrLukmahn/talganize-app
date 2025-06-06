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

exports.saveJob = async (req, res) => {

    try {

        const jobId = req.body.jobId
        const userId = req.body.userId

        const insertJob = 'INSERT INTO saved_jobs(user_id, job_id) VALUES(?, ?)'

        const [result, fields] = await db.query(insertJob, [userId, jobId])

        if (result && result.affectedRows > 0) {
            res.status(201).json({
                status: true,
                message: "Job saved."
            })
        } else {
            res.status(500).json({
                status: false,
                message: "Unable to save the job."
            })
        }

    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}
exports.unsaveJob = async (req, res) => {

    try {

        const jobId = req.body.jobId
        const userId = req.body.userId

        const deleteJob = 'DELETE FROM saved_jobs where user_id = ? and job_id = ?'

        const [result, fields] = await db.query(deleteJob, [userId, jobId])

        if (result && result.affectedRows > 0) {
            res.status(200).json({
                status: true,
                message: "Removed job from saved list."
            })
        } else {
            res.status(500).json({
                status: false,
                message: "Unable to save the job."
            })
        }

    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.getSavedJobIds = async (req, res) => {

    try {
        const userId = req.params.userId;

        const fetchSavedJobs = 'SELECT job_id from saved_jobs where user_id = ?'
        const [qResult, fields] = await db.query(fetchSavedJobs, [userId])

        const uniqueJobIds = [...new Set(qResult.map(obj => obj.job_id))]

        if (uniqueJobIds && uniqueJobIds.length > 0) {
            res.status(200).json({
                status: true,
                result: uniqueJobIds
            })
        } else {
            res.status(200).json({
                status: true,
                result: []
            })
        }

    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}
