const express = require('express')
const employerRouter = express.Router()
const employerController = require('../controllers/employerController')



employerRouter.post('/addNewSkill', employerController.addNewSkill)
employerRouter.get('/getSkills', employerController.getAllSkills)











module.exports = employerRouter