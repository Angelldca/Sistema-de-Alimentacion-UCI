import { Chart } from '../chart/chart'
import FormData from '../DateChart/DateChart'
import CardContainer from '../cards/cardContainer'
import Info from '../Info/Info'

import React, { useEffect } from "react";
import Plato from '../Plato/Plato';
import Menu from '../menu/menu';
import Reserva from '../reserva/Reserva';
import { Outlet,Navigate, redirect } from "react-router-dom";
import HeaderPrueba from '../header/header';
import BreadcrumbMigas from '../migas/Breadcrumb';
import Footer from '../footer/Footer';


import { useNavigate } from 'react-router-dom';

function Admin_Panel() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/admin/homeAdmin');
  }, []);
  return (
    <div style = {{minHeight:'600px'}}>
      <HeaderPrueba/>
      <BreadcrumbMigas/>
       <Outlet/>
      <Footer/>
    </div>
  );
}

export default Admin_Panel;
