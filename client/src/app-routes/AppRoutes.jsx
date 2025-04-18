import ProtectedRoute from '@/components/protectedRoute/ProtectedRoute'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Constants from '../app-routes/Constants'
import Profile from '@/components/jobseeker/Profile'
import JobPostMain from '@/components/employer/JobPostMain'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import ForgotPassword from '../pages/forgotPassword/ForgotPassword'
import ResetPassword from '../pages/resetPassword/ResetPassword'
import SavedJobs from '@/components/jobseeker/SavedJobs'
import Content from '../components/content/Content'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                <Route path={Constants.Home} element={<Home pageType="Homepage" />} />
                <Route path={Constants.Login} element={<Login pageType="Login" />} />
                <Route path={Constants.Register} element={<Register pageType="Register" />} />
                <Route path={Constants.ForgotPassword} element={<ForgotPassword pageType="ForgotPassword" />} />
                <Route path={Constants.ResetPassword} element={<ResetPassword pageType="ResetPassword" />} />
                <Route path={Constants.Jobs} element={<Content pageType="Content" />} />


                <Route element={<ProtectedRoute allowedRoles={['JobSeeker']} />}>
                    <Route path={Constants.Profile} element={<Profile />} />
                    <Route path={Constants.SavedJobs} element={<SavedJobs />} />
                </Route>

                <Route element={<ProtectedRoute allowedRoles={['Employer']} />}>
                    <Route path={Constants.JobPost} element={<JobPostMain />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes