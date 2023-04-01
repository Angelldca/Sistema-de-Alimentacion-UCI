import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card";
import CardPlatosActualizar from './CardPlatosActualizar';


function CardBodyActualizar({menu, menuReservar}) {
  const [chekboxs, setChekboxs] = useState(menu.id_platosMenu); 
  
  function getChekbox (chek) {
    if(!chekboxs.includes(chek)){
        setChekboxs([...chekboxs,chek]);
    }else{

        const filteredLibraries = chekboxs.filter((item) => item !== chek)
        setChekboxs(filteredLibraries);
        
    }
    
  }

    useEffect(()=>{
      //if(chekboxs.length > 0 )
      menuReservar(menu,chekboxs,menu.id_reserva)
     
    },[chekboxs])
    
    return (
        <>
             <Card.Body>
            <Card.Title style={{ textDecorationLine: "underline" }}>
              {menu.evento}
            </Card.Title>
           
                
             {menu.platos.map((plato,index)=>(
                 <CardPlatosActualizar 
                 getChekbox={getChekbox} 
                 chekboxs={chekboxs} 
                 plato={plato} 
                 key={index}/>
             ))}

            
           
          </Card.Body>
          <hr />
        </>
    )
}

export default CardBodyActualizar
