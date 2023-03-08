import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { FaTelegramPlane } from 'react-icons/fa';
import "./cards.css";
import { useState } from "react";




function CardMenu({reservar, menu,index}) {
  
    let now = new Date().toLocaleDateString('es-es', { weekday:"long", day:"numeric",month:"long", year:"numeric"});
    
    let fecha = new Date(`${menu.fecha}`).toLocaleDateString('es-es', { weekday:"long", day:"numeric",month:"long", year:"numeric"});
    if(reservar === true){

      return(
        <div className="m-2 cards">

        
        <Card border="primary" className="cardMenu">
          <Card.Header>
            {`${
               fecha
               //menu.fecha
            }`}
           
            
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ textDecorationLine: "underline" }}>
             {menu.evento}
            </Card.Title>
            <Card.Text>
              {menu.id_plato.map((id_plato,index)=>(
                <>
                 <span>{id_plato} </span>
                 <span>  $0.34 </span>
                 <input key={id_plato} type="checkbox"/>
                 <br/>
                </>
              ))
              }
             
            </Card.Text>
            
          </Card.Body>
          <Card.Footer>
          <Button>Reservar</Button>
          </Card.Footer>
          </Card>
          </div>
      )
    
    }
    else{
      return (
      <div className="m-2 cards">
        <Card border="primary" className="cardMenu">
          <Card.Header>
            {`${
              now
            }`}
            <Button variant="info" style={{marginLeft:'20px'}}><FaTelegramPlane/></Button>
            
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ textDecorationLine: "underline" }}>
              Desayuno
            </Card.Title>
            <Card.Text>
              <span>Pan 1U </span>
              <span>  $0.34</span>
              <br />
              <span>Jugo de ciruela 1 vaso </span>
              <span> $1.34</span>
            </Card.Text>
          </Card.Body>
          <hr />
          <Card.Body>
            <Card.Title style={{ textDecorationLine: "underline" }}>
              Almuerzo
            </Card.Title>
            <Card.Text>
             <span>Pan 1U </span>
              <span> $0.34</span>
              <br />
              <span>Arroz 40 g </span>
              <span> $1.34</span>
              <br />
              <span>Chicharo 40 g </span>
              <span> $1.34</span>
              <br />
              <span>Pollo 40 g </span>
              <span> $1.34</span>
            </Card.Text>
          </Card.Body>
          <hr />
          <Card.Body>
            <Card.Title style={{ textDecorationLine: "underline" }}>
              Comida
            </Card.Title>
            <Card.Text>
            <span>Pan 1U </span>
              <span> $0.34</span>
              <br />
              <span>Arroz 40 g </span>
              <span> $1.34</span>
              <br />
              <span>Chicharo 40 g </span>
              <span> $1.34</span>
              <br />
              <span>Pollo 40 g </span>
              <span> $1.34</span>
            </Card.Text>
          </Card.Body>
          <hr />
        </Card>
        <br />
      </div>
    );
      
    }
}

export default CardMenu;
