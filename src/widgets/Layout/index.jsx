import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Header } from '../Header' 
import { Footer }  from '../Footer'

export function Layout() {
    const token = window.localStorage.getItem("token");
    if (!token) return <Navigate to="/sign-in" />;
    return (
        <>
            <Header />
            <Outlet /> 
            <Footer/>
        </>
    )
}
