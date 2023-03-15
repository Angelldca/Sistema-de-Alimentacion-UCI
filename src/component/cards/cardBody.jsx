import React from 'react'
import Card from "react-bootstrap/Card";
import CardPlatos from './cardPlatos';


function CardBody({menu}) {
    return (
        <>
             <Card.Body>
            <Card.Title style={{ textDecorationLine: "underline" }}>
              {menu.evento}
            </Card.Title>
           
                
             {menu.platos.map((plato,index)=>(
                 <CardPlatos plato={plato} key={index}/>
             ))}

            
           
          </Card.Body>
          <hr />
        </>
    )
}

export default CardBody
