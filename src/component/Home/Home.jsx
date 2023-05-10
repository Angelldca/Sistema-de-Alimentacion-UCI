import React, { useContext, useEffect, useState } from "react";
import Info from "../Info/Info";
import { Chart } from "../chart/chart";
import CardContainer from "../cards/cardContainer";
import FormDate from "../DateChart/DateChart";
import UserContext from "../../contexts/userContext";
import { useLocation } from 'react-router-dom';
import ControlledCarousel from "../carousel/carousel";
import AsideMenu from "../asideMenu/AsideMenu";
import "./home.css"
function HomeAdmin() {
  const {actualizaHistorial, historial}  = useContext(UserContext);
  const location = useLocation();
  useEffect(()=>{
    actualizaHistorial(location.pathname.split("/"));
  },[])

  const [dtoPlatosFecha, setdtoPlatosFechas]  = useState(null)
   
  return (
    <>
    {/*/<ControlledCarousel/>*/}
    <div className="containerOptions">
      <Info />
      <AsideMenu/>
      </div>
     
      <CardContainer />
      
    </>
  );
}

export default HomeAdmin;
