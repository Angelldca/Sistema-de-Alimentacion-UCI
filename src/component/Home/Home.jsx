import React, { useContext, useEffect, useState } from "react";
import Info from "../Info/Info";
import { Chart } from "../chart/chart";
import CardContainer from "../cards/cardContainer";
import FormDate from "../DateChart/DateChart";
import UserContext from "../../contexts/userContext";
import { useLocation } from 'react-router-dom';
function HomeAdmin() {
  const {actualizaHistorial, historial}  = useContext(UserContext);
  const location = useLocation();
  useEffect(()=>{
    actualizaHistorial(location.pathname.split("/"));
  },[])

  const [dtoPlatosFecha, setdtoPlatosFechas]  = useState({
    id_plato:"",
    fechaInicio:"",
    fechaFin:""
  })
   console.log(dtoPlatosFecha)
  return (
    <>
      <Info />
      <CardContainer />
      <FormDate setdtoPlatosFechas={setdtoPlatosFechas} />
      <Chart dtoPlatosFecha={dtoPlatosFecha}/>
    </>
  );
}

export default HomeAdmin;
