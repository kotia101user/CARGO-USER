import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouteTwo = () => {
    const token = JSON.parse(window.localStorage.getItem('token'));
    return (
        <>
            {
                !token ? <Outlet /> : <Navigate to='/' />
            }
        </>
    )
}

export default ProtectedRouteTwo