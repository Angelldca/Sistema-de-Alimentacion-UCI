import { useState, useEffect } from "react";

import "./App.css";
import HeaderPrueba from "./component/header/header";
import BreadcrumbMigas from "./component/migas/Breadcrumb";
import ControlledCarousel from "./component/carousel/carousel";
import Footer from "./component/footer/Footer";


import Admin_Panel from "./component/Admin_Panel/Admin_Panel";

import { Outlet } from "react-router-dom";
import Login from "./component/Login/Login";

function App() {
  useEffect(()=>{
   // window.location.href = "/home/admin"
    //console.log(window.location.href)
  })
  return (
    <div className="App"> 
      <Outlet/>
    </div>
  );
}

export default App;
