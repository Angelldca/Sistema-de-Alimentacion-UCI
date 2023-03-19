import { SlPeople } from "react-icons/sl";
import { TfiMoney } from "react-icons/tfi";
import { MdOutlineFoodBank } from "react-icons/md";

import "../Info/info.css";
import React, { useState, useEffect } from "react";
import axios from "axios";


function Info() {
    const [importe, setImporte] =useState(0);
    const [cantidadPlatos, setCantidadPlatos] =useState(0);
    const [cantReservas, setCantidadReservas] =useState(0);
     
    useEffect(()=>{
      axios.get('http://localhost:8080/factura/importe')
      .then(response=>{

        setImporte(response.data)
      })
      
    },[])
    useEffect(()=>{
      axios.get('http://localhost:8080/factura/cantidad')
      .then(response=>{
        setCantidadReservas(response.data)

      })
    },[])
    useEffect(()=>{
      axios.get('http://localhost:8080/plato/cantPlatos')
      .then(response=>{
        setCantidadPlatos(response.data)

      })
    },[])

  return (
    <div className="containerInfo">
      <div>
        <div className="containerCant">
          <SlPeople  className="icon"/>
          <h3>{cantReservas}</h3>
        </div>

        <h2>Reservaciones</h2>
      </div>
      <div>
        <div className="containerCant">
          <TfiMoney className="icon"/>
          <h3>{importe}</h3>
        </div>

        <h2>Importe Total</h2>
      </div>
      <div>
        <div className="containerCant">
          <MdOutlineFoodBank className="icon"/>
          <h3>{cantidadPlatos}</h3>
        </div>

        <h2>Platos disponibles</h2>
      </div>
      <hr/>
    </div>
  );
}

export default Info;
