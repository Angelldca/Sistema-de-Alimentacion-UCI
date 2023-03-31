import Form from "react-bootstrap/Form";
import { useState, useEffect, useRef } from "react";
import '../DateChart/dataChart.css'
import axios from "axios";

const FormDate =( {setdtoPlatosFechas})=> {
      const [platos, setPlatos] = useState([])
      const refForm = useRef(null)
          
    let fechaFormateada = new Date().getMonth()+1 > 10 ? `${new Date().getFullYear()}-${new Date().getMonth()+1}`
    :`${new Date().getFullYear()}-0${new Date().getMonth()+1}`;

    const [date, setDate] = useState(fechaFormateada);
      useEffect(()=>{
           
           axios.get("http://localhost:8080/plato")
           .then(response=>{
             setPlatos(response.data);
           })   
      },[])
  
  
    
   const handleChange=(e)=>{
    
    setdtoPlatosFechas({
      id_plato:refForm.current.value,
      fechaInicio:date + '-01',
      fechaFin:date + '-32'
     })
   }


  return (
    <div className="formData">
      <Form.Select 
      aria-label="Default select example"
      ref={refForm}
      onChange={handleChange}
      
      >
         <option  value={0}>Seleccione un plato</option>
        {platos.map((plato,index)=>(
           <option key={index} value={plato.id_plato}>{plato.nombre_plato}</option>
        ))}
      </Form.Select>
      <div className="col-md-12 dateForm">
      <Form.Group controlId="duedate">
              <Form.Control
                type="month"
                name="duedate"
                placeholder="Due date"
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                    setdtoPlatosFechas({
                      id_plato:refForm.current.value,
                      fechaInicio:e.target.value + '-01',
                      fechaFin:e.target.value + '-32'
                     })
                }}
                
              />
            </Form.Group>
          </div>
    </div>
  );
}

export default FormDate;
