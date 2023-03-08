import { Chart } from '../chart/chart'
import FormData from '../DateChart/DateChart'
import CardContainer from '../cards/cardContainer'
import Info from '../Info/Info'

import React from "react";
import Plato from '../Plato/Plato';
import Menu from '../menu/menu';


function Admin_Panel() {
  return (
    <div style = {{minHeight:'600px'}}>
      <Menu></Menu>
      {/*
      
      <Plato></Plato>
       <Info />
        <FormData />
        <Chart />
        <CardContainer />
      
      */}
    </div>
  );
}

export default Admin_Panel;