import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderUser from './HeaderUser'
import Footer from '../footer/Footer'
import './user.css'
import BreadcrumbMigas from '../migas/Breadcrumb'
function UserPanel() {
    return (
        <div className="userPanel">
            <HeaderUser/>
           
            <div className="content">
            <Outlet/>
            </div>
            <Footer className="footer"/>
        </div>
    )
}

export default UserPanel
