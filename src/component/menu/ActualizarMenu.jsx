import React, {useRef, useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";

import ListarPlatosMenu from "./ListarPlatosMenu";
import CardMenuActualizar from "./TableMenu/CardMenu";

function ActualizarMenu() {
    const eventoRef = useRef(null);
    const [chekboxs, setChekboxs] = useState([]);
    const [evento, setEvento] = useState("Desayuno");
    let { state } = useLocation();
    const [menu, setMenu] = useState(state);

   
  function getChekbox (chek) {
        if(!chekboxs.includes(chek)){
            setChekboxs([...chekboxs,chek]);
        }else{

            const filteredLibraries = chekboxs.filter((item) => item !== chek)
            setChekboxs(filteredLibraries);
            
        }
      }
  return (
    <>
   
      <h1>Actualizar Menu</h1>
      <div className="actualizarContainer">
        <CardMenuActualizar 
        menu={menu} 
         chekboxs={chekboxs} 
         setMenu={setMenu} 
         evento={evento}/>
        <div  style={{width:"600px"}}>
          <Form.Group controlId="duedate">
            <Form.Select
              aria-label="Default select example"
              className="mb-4"
              ref={eventoRef}
              onChange={(e)=>{
                  setEvento(eventoRef.current.value)
                  
              }}
            >
              {state.map((menu,index)=>(
                <option defaultValue={menu.evento} key={index}>{menu.evento}</option>
              ))}
              
             
            </Form.Select>
          </Form.Group>
          <ListarPlatosMenu getChekbox={getChekbox}/>
        </div>
      </div>
    </>
  );
}

export default ActualizarMenu;
