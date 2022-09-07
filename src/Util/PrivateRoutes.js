import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {

    const loginData = localStorage.getItem('Token-ID');
    let auth = { 'token': loginData }

    // useEffect(() => {
    //     console.log("window.location", loginData, Object.keys(loginData).length === 0, window.location.pathname)
    //     if (Object.keys(loginData).length === 0 && window.location.pathname !== 'login') {
    //         <Navigate to='/login' />
    //     }
    // }, [window.location.pathname, loginData])


    return (
        auth.token ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes