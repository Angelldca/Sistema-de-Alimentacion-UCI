import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card";
import CardPlatos from './cardPlatos';


function CardBody({menu, reservar, menuReservar, actualizar}) {
  const [chekboxs, setChekboxs] = useState([]); 
  
  function getChekbox (chek) {
    if(!chekboxs.includes(chek)){
        setChekboxs([...chekboxs,chek]);
    }else{

        const filteredLibraries = chekboxs.filter((item) => item !== chek)
        setChekboxs(filteredLibraries);
        
    }
    
  }

    useEffect(()=>{
      if(chekboxs.length > 0 )
      menuReservar(menu,chekboxs)
    },[chekboxs])
    useEffect(()=>{
     
    },[])
    return (
        <>
             <Card.Body>
            <Card.Title style={{ textDecorationLine: "underline" }}>
              {menu.evento}
            </Card.Title>
           
                
             {menu.platos.map((plato,index)=>(
                 <CardPlatos actualizar={actualizar} getChekbox={getChekbox} reservar={reservar} plato={plato} key={index}/>
             ))}

            
           
          </Card.Body>
          <hr />
        </>
    )
}

export default CardBody
