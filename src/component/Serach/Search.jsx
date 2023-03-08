import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import Swal from 'sweetalert2'
import './search.css'
import { useState } from 'react';



function Search(props) {
  const [nombrePlato,setNombrePlato] = useState("");
  const handleChange = (e)=>{
    setNombrePlato(e.target.value);
  }
  const searchPlato = async ()=>{
    await fetch(`http://localhost:8080/plato/search/${nombrePlato}`)
    .then(response=> response.json())
    .then(response=>{
        Swal.fire(
          'Encontrado! "Por hacer"',
          `${response.nombre_plato}`,
          'success'
        )
       // setActualizar(!actualizar);

    })
  }
  return (
    <div className="search">
     {/* <Form.Label htmlFor="inputPassword5">Nombre</Form.Label>*/}
      <Form.Control
        type="text"
        id="searchForm"
        aria-describedby="passwordHelpBlock"
        placeholder="Nombre"
        value={nombrePlato}
         onChange={handleChange}
      />
          <Button  className ="btnSearch" onClick={searchPlato}>
              <ImSearch/>
          </Button>
      
    </div>
  );
}

export default Search;