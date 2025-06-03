const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController')
const jobSeekerController = require('../controllers/jobSeekerController')

//Google routes
userRouter.get('/api/getUser/:userId', userController.getUser)
userRouter.post('/api/auth/register', userController.registerUser)
userRouter.post('/api/auth/google', userController.loginWithGoogle)
userRouter.get('/api/auth/google/callback', userController.googleAuthCallback)
// userRouter.get('/api/me', userContoller.loginWithGoogle)

// Microsoft route (only POST needed)
userRouter.post('/microsoft', userController.loginWithMicrosoft);

//Other routes
userRouter.post('/api/auth/login', userController.loginUser)
userRouter.post('/api/auth/verifyEmailToken', userController.verifyEmailToken)
userRouter.post('/api/auth/sendEmailVerificationLink', userController.sendEmailVerificationLink)
userRouter.post('/api/addExperience', jobSeekerController.addExperience)


//Testing routes
userRouter.get('/api/testServer', userController.testServerStatus)
userRouter.get('/api/test', userController.checkDatabaseConnection)



module.exports = userRouter