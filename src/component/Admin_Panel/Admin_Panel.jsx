

import React, { useEffect } from "react";

import { Outlet,Navigate, redirect } from "react-router-dom";
import HeaderPrueba from '../header/header';
import BreadcrumbMigas from '../migas/Breadcrumb';
import Footer from '../footer/Footer';
import './adminPanel.css'



function Admin_Panel() {

  return (
    <div  className="adminPanel">
      <HeaderPrueba/>
     {/* <BreadcrumbMigas/>*/}
      
       <div className="content">
        <Outlet/>
       </div>
      
      <Footer className="footer"/>
    </div>
  );
}

export default Admin_Panel;
