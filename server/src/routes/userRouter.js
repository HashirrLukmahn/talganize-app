const express = require('express')
const userRouter = express.Router()
const userContoller = require('../controllers/userController')
const jobSeekerController = require('../controllers/jobSeekerController')

userRouter.get('/api/getUser/:userId', userContoller.getUser)
userRouter.post('/api/auth/register', userContoller.registerUser)
userRouter.post('/api/auth/google', userContoller.loginWithGoogle)
userRouter.get('/api/auth/google/callback', userContoller.googleAuthCallback)
// userRouter.get('/api/me', userContoller.loginWithGoogle)
userRouter.post('/api/auth/login', userContoller.loginUser)
userRouter.post('/api/auth/verifyEmailToken', userContoller.verifyEmailToken)
userRouter.post('/api/auth/sendEmailVerificationLink', userContoller.sendEmailVerificationLink)

userRouter.post('/api/addExperience', jobSeekerController.addExperience)



userRouter.get('/api/testServer', userContoller.testServerStatus)
userRouter.get('/api/test', userContoller.checkDatabaseConnection)



module.exports = userRouter