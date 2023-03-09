import React from 'react';
import Button from 'react-bootstrap/Button';
import {AiOutlineDelete} from "react-icons/ai"
function FilaMenuPlato() {
  return (
    <tr>
    <td>1</td>
    <td>
      {" "}
      <input
        type="text"
        defaultValue="23"
        className=""
        disabled
        name="nombre_plato"
        
      />
    </td>
    <td>
      <input
        type="text"
        defaultValue="24"
        className=""
        disabled
        
        name="gramaje"
        
      />
    </td>
    <td>
      <input
        type="text"
        defaultValue="{formData.precio_plato}"
        className=""
        disabled
        
        name="precio_plato"
      
      />
    </td>
    <td>
        <input type="checkbox"/>
        {/*
        
      <Button
        style={{ color: "black" }}
        className="ms-3 me-3"
        variant="outline-info"
       
      >
        <AiOutlineDelete />
      </Button>
        */}
    
    </td>
  </tr>
  );
}

export default FilaMenuPlato;
