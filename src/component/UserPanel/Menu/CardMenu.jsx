import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "../../cards/cards.css";
import { useState, useContext } from "react";
import CardBody from "../../cards/cardBody";
import Swal from "sweetalert2";
import moment from 'moment'
import 'moment-timezone';
import { useNavigate } from "react-router-dom";
import UserContext from "../../../contexts/userContext";
import axios from "axios";
function CardMenu({ menu, index, setActualizar, actualizar }) {
  
  const {user}  = useContext(UserContext);
  
  const [menuReserva, setMenuReserva] = useState([]);
  const navigate = useNavigate();
  let now = new Date().toLocaleDateString("es-es", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });


  const objetoFecha = moment(`${menu[0].fecha}`, 'YYYY-MM-DD');
  const fechaNueva = objetoFecha.subtract(1, 'day');
  const fecha = fechaNueva.format("dddd, D [de] MMMM [de] YYYY");


    return (
      <div className="m-2 cards">
        <Card border="primary" className="cardMenu" style={{ height: "690px" }}>
          <Card.Header style={{ display: "flex", maxHeight: "58px" }}>
            {`${
              // JSON.stringify(menu)
              fecha
            }`}
         
          </Card.Header>
          {menu.map((menu, index) => (
            <CardBody menu={menu} key={index}></CardBody>
          ))}
          <Card.Footer
            style={{ display: "flex", justifyContent: "space-around" }}
          >
         
          </Card.Footer>
        </Card>
        <br />
      </div>
    );
  
}

export default CardMenu;
