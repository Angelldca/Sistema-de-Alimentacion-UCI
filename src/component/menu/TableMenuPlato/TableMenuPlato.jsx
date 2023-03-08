import React from 'react'
import Table from 'react-bootstrap/Table';
import FilaMenuPlato from './FilaMenuPlato';
function TableMenuPlato() {
    return (

        <Table bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Medida</th>
                    <th>Precio</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
               <FilaMenuPlato></FilaMenuPlato>
               <FilaMenuPlato></FilaMenuPlato>
               <FilaMenuPlato></FilaMenuPlato>
               <FilaMenuPlato></FilaMenuPlato>
               <FilaMenuPlato></FilaMenuPlato>
            </tbody>
        </Table>

    )
}

export default TableMenuPlato
