import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "../../cards/cards.css";
import { useState, useContext } from "react";
import CardBody from "../../cards/cardBody";

import 'moment-timezone';

import UserContext from "../../../contexts/userContext";

import { formatFechaES } from "../../../utils/Utils";
function CardMenu({ menu, index, setActualizar, actualizar }) {
  
  const {user}  = useContext(UserContext);
  

  const fecha = formatFechaES(`${menu[0].fecha}`);


    return (
      <div className="m-2 cards">
        <Card border="primary" className="cardMenu" style={{ height: "900px" }}>
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
