import React, { useState, useRef } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./plato.css";
import useFetchPost from "../../hooks/useFetchPost";

const CreatePlato = ()=> {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({nombre_plato:null});
  const gramajeRef = useRef(null);
  const precioRef = useRef(null);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
        const dataPost = { 
            ...formData,
          "gramaje": `${formData.gramaje} ${gramajeRef.current.value}`,
          "precio_plato": precioRef.current.value
          
      };
      //console.log(data)
      const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataPost)
        };
      const {data, isLoading, errorResult} = await useFetchPost("http://localhost:8080/plato/createPlato", options);
      console.log(data)
      if(data !== null){
        Swal.fire(
            'Plato creado!',
            'success'
          )
      }else{
        Swal.fire({
            icon: 'Error',
            title: 'Oops...',
            text: `${errorResult}`,
           
          })
      }
      console.log("Error del post " + errorResult )
      event.preventDefault();
      event.stopPropagation();
    }
  
    event.preventDefault();
    setValidated(true);
  };
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

  };

  return (
    <div className="createPlato">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre del plato</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre del plato"
              defaultValue=""
              name="nombre_plato"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Precio</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control 
              defaultValue={0} 
              aria-label="Amount (to the nearest dollar)"	
              name="precio_plato"
              ref={precioRef}
              onChange={handleInputChange}
              />
            </InputGroup>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Medida</Form.Label>
            <Form.Control onChange={handleInputChange} type="text" 
            placeholder="Medida" required 
            name="gramaje"
            />
            <Form.Control.Feedback type="invalid">
             Por favor inserte los datos correctos.
            </Form.Control.Feedback>
          </Form.Group>
         
          <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Seleccione unidad de medida</Form.Label>
          <Form.Select  
          aria-label="Default select example" 
          defaultValue="G"
          name="medida"
          ref={gramajeRef}
          >
            <option value="G">Gramos</option>
            <option value="U">Unidad</option>
          </Form.Select>
          </Form.Group>
        </Row>

        <div className="col-6 m-1">
         
        </div>
        <Button type="submit" style={{marginLeft:"40%", marginTop:"40px", position:"absolute"}}>Crear Plato</Button>
      </Form>
    </div>
  );
}

export default CreatePlato;
