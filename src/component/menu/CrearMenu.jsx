import React, { useState } from 'react'
import ListarPlatosMenu from './ListarPlatosMenu'
import "./menu.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function CrearMenu() {
    let fechaFormateada = new Date().getMonth() + 1 > 10 ? `${new Date().getFullYear()}-${new Date().getMonth() + 1}`
        : `${new Date().getFullYear()}-0${new Date().getMonth() + 1}`;

    const [date, setDate] = useState(new Date());

    return (
        <div >
            <h1>Crear Menú</h1>
            <div className="contenedorCreateMenu">
                <ListarPlatosMenu></ListarPlatosMenu>
                <div  className="calendarioMenu">
                    <Form.Group controlId="duedate">
                        <Form.Control
                            type="date"
                            name="duedate"
                            placeholder="Due date"
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                                //console.log(date)
                            }}
                            className="m-3"

                        />
                        <Form.Select aria-label="Default select example" className="m-3">
                            <option>Seleccionar evento</option>
                            <option value="Desayuno">Desayuno</option>
                            <option value="Almuerzo">Almuerzo</option>
                            <option value="Comida">Comida</option>
                        </Form.Select>
                        <Button variant="outline-info" className="m-3">Crear Menú</Button>
                    </Form.Group>

                    
            </div>
          
            </div>

        </div>
    )
}

export default CrearMenu
