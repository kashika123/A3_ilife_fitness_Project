import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'


const PrivateRoute = () => {

    const location = useLocation().pathname
    if (localStorage.getItem("userLogged") == "true") {
        return <Outlet />
    } else if (location === "/activities" || location === "/coach") {
        return <Navigate to='register' replace />
    } else {
        return <Navigate to='login' replace />

    }

}

export default PrivateRoute