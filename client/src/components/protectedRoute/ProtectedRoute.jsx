
import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import * as Constants from '../../app-routes/Constants'

function ProtectedRoute({ allowedRoles }) {

    const navigate = useNavigate()

    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))

    if (!token || !user) {
        navigate(Constants.Login)
        return
    }

    if (!allowedRoles.includes(user.type_name)) {
        console.log('not authorized.');

        return <Navigate to={Constants.Login} />
    }

    // if (!user.user_type === 1) {
    //     navigate(Constants.Login)
    //     return
    // }

    return (
        <Outlet />
    )
}

export default ProtectedRoute