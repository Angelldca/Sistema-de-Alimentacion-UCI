import React, { useState, useEffect, useRef } from 'react'
import ListarPlatosMenu from './ListarPlatosMenu'
import "./menu.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment'
import 'moment-timezone';
import Swal from 'sweetalert2'
import useFetchPost from '../../hooks/useFetchPost';
import { MdNoMeetingRoom } from 'react-icons/md';


const  CrearMenu = ()=> {
    const fechaActual = new Date();
    const cadenaFecha = fechaActual.toISOString().slice(0, 10);

    const [date, setDate] = useState(cadenaFecha);
    const [chekboxs, setChekboxs] = useState([]);
    
    const eventoRef = useRef(null);
    const [formData,setFormData] = useState({
        evento:"",
        fecha:"",
        id_plato:[]
    }) 
    

    function getChekbox (chek) {
        if(!chekboxs.includes(chek)){
            setChekboxs([...chekboxs,chek]);
        }else{

            const filteredLibraries = chekboxs.filter((item) => item !== chek)
            setChekboxs(filteredLibraries);
            
        }
       // console.log(chekboxs)
        
      }
      const submitMenu = async (event)=>{
          event.preventDefault();
          const {name, value} = event.target;
          const fechaPostgreSQL = moment(date).tz('America/Havana').format('YYYY-MM-DD');
          console.log(fechaPostgreSQL)
          const newValues ={
            ...formData,
            [name]: value,
            estado:"Activo",
            fecha: fechaPostgreSQL,
            evento:eventoRef.current.value,
            id_plato:chekboxs
          }
            setFormData(newValues)
            if(new Date(date) > new Date(cadenaFecha) && chekboxs.length > 0) {
                const options = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newValues)
                };
                
                const {data, isLoading, errorResult} = await useFetchPost("http://localhost:8080/menu/createMenu", options);
                
                if(data.error ){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${data.message}`,
                        
                    })
                }else{

                    if(data){
                        Swal.fire(
                            'Menu Creado!',
                            'El menu se creó correctamente',
                            'success'
                          )
                      }
                }
               
                
                
            }else{
               
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `Debe seleccionar al menos un plato o la fecha debe ser correcta`,
                        
                    })
                
                
                
            }
            
          
            
        }
        
    return (
        <div>
            <h1>Crear Menú</h1>
            <div className="contenedorCreateMenu">
                <ListarPlatosMenu 
                getChekbox={getChekbox}>
                </ListarPlatosMenu>
                <div  className="calendarioMenu">
                   

                    <Form.Group controlId="duedate" >
                        <Form.Control
                            type="date"
                            name="duedate"
                            placeholder="Due date"
                            value={date}
                            onChange={(e) => {
                            setDate(e.target.value);
                               
                            }}
                            className="m-3"

                        />
                        <Form.Select 
                        aria-label="Default select example" 
                        className="m-3"
                        ref={eventoRef}

                        >
                            <option defaultValue="Desayuno">Desayuno</option>
                            <option defaultValue="Almuerzo">Almuerzo</option>
                            <option defaultValue="Comida">Comida</option>
                        </Form.Select>
                         
                    </Form.Group>
                        <Button onClick={submitMenu} variant="outline-info" className="m-3"
                        >Crear Menú</Button>
                  

                    
            </div>
          
            </div>

        </div>
    )
}

export default CrearMenu
