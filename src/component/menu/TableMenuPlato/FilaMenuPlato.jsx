import React from 'react';
import Button from 'react-bootstrap/Button';
import {AiOutlineDelete} from "react-icons/ai"
function FilaMenuPlato({plato,index, getChekbox}) {
  
  const handleCheckboxChange =  (event) => {
      const { checked } = event.target;
      getChekbox(plato.id_plato)
     
  }

  return (
    <tr>
    <td>{index+1}</td>
    <td>
      
      <p>{plato.nombre_plato}</p>
    </td>
    <td>
       <p>{plato.gramaje}</p>
    </td>
    <td>
     
      <p>{plato.precio_plato}</p>
    </td>
    <td>
        <input type="checkbox" onChange={handleCheckboxChange}/>
    </td>
  </tr>
  );
}

export default FilaMenuPlato;
