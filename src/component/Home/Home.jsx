import React from "react";
import Info from "../Info/Info";
import { Chart } from "../chart/chart";
import CardContainer from "../cards/cardContainer";
import FormDate from "../DateChart/DateChart";

function HomeAdmin() {
  return (
    <>
      <Info />
      <FormDate />
      <Chart />
      <CardContainer />
    </>
  );
}

export default HomeAdmin;
