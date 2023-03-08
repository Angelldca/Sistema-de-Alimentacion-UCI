import { SlPeople } from "react-icons/sl";
import { TfiMoney } from "react-icons/tfi";
import { MdOutlineFoodBank } from "react-icons/md";

import "../Info/info.css";
import React from "react";

function Info() {
  return (
    <div className="containerInfo">
      <div>
        <div className="containerCant">
          <SlPeople  className="icon"/>
          <h3>{0}</h3>
        </div>

        <h2>Reservaciones</h2>
      </div>
      <div>
        <div className="containerCant">
          <TfiMoney className="icon"/>
          <h3>{0}</h3>
        </div>

        <h2>Importe Total</h2>
      </div>
      <div>
        <div className="containerCant">
          <MdOutlineFoodBank className="icon"/>
          <h3>{0}</h3>
        </div>

        <h2>Platos disponibles</h2>
      </div>
      <hr/>
    </div>
  );
}

export default Info;
