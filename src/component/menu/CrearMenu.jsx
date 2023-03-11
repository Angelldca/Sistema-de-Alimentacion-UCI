import React, { useState, useEffect } from 'react'
import ListarPlatosMenu from './ListarPlatosMenu'
import "./menu.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const  CrearMenu = ()=> {
    //let fechaFormateada = new Date().getMonth() + 1 > 10 ? `${new Date().getFullYear()}-${new Date().getMonth() + 1}`
     //   : `${new Date().getFullYear()}-0${new Date().getMonth() + 1}`;

    const [date, setDate] = useState(new Date());
    const [chekboxs, setChekboxs] = useState([]);

    //const [platosMenu, dispatch] = useReducer(reducerPlatosMenu, initialState);

    function getChekbox (chek) {
        if(!chekboxs.includes(chek)){
            setChekboxs([...chekboxs,chek]);
        }else{

            const filteredLibraries = chekboxs.filter((item) => item !== chek)
            setChekboxs(filteredLibraries);
            
        }
       // console.log(chekboxs)
        
      }
  
    return (
        <div>
            <h1>Crear Menú</h1>
            <div className="contenedorCreateMenu">
                <ListarPlatosMenu 
                getChekbox={getChekbox}>
                </ListarPlatosMenu>
                <div  className="calendarioMenu">
                    <Form.Group controlId="duedate">
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
                        <Form.Select aria-label="Default select example" className="m-3">
                            <option value="Desayuno">Desayuno</option>
                            <option value="Almuerzo">Almuerzo</option>
                            <option value="Comida">Comida</option>
                        </Form.Select>
                        <Button type="submit" variant="outline-info" className="m-3">Crear Menú</Button>
                    </Form.Group>

                    
            </div>
          
            </div>

        </div>
    )
}

export default CrearMenu
