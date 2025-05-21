const express = require('express')
const jobSeekerRouter = express.Router()
const jobSeekerController = require('../../src/controllers/jobSeekerController')


jobSeekerRouter.post('/api/job/saveJob', jobSeekerController.saveJob)
jobSeekerRouter.post('/api/job/unsaveJob', jobSeekerController.unsaveJob)
jobSeekerRouter.get('/api/job/savedIds/:userId', jobSeekerController.getSavedJobIds)








module.exports = jobSeekerRouter