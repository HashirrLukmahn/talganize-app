const db = require('../config/db')


exports.addNewSkill = async (req, res) => {
    try {
        const newSkill = req.body.skill;

        // Validate input
        if (!newSkill || newSkill.trim() === "") {
            return res.status(400).json({
                status: false,
                message: "Skill name is required."
            });
        }

        // Check for existing skill
        const query = 'SELECT * FROM skills where name = ?'
        const [existing] = await db.query(query, [newSkill.trim()])

        if (existing && existing.length > 0) {
            return res.status(409).json({
                status: false,
                message: "Skill already exists."
            });
        }

        // Insert new skill
        const addSkill = 'INSERT INTO skills(name) values(?)'

        const [insertResult] = await db.query(addSkill, [newSkill.trim()])
        if (insertResult.affectedRows === 1) {
            return res.status(201).json({
                status: true,
                message: "New skill added successfully."
            })
        } else {
            throw new Error("Skill insert operation failed.")
        }

    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message,
            message: "Inernal server error"
        })
    }
}

exports.getAllSkills = async (req, res) => {

    try {
        const [result] = await db.query('SELECT * FROM skills ORDER BY name ASC');

        res.status(200).json({
            status: true,
            message: "Skills fetched successfully.",
            data: result
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Failed to fetch skills.",
            error: error.message
        });
    }
}