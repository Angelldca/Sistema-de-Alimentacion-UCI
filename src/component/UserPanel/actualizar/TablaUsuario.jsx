import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'react-bootstrap'

import axios from 'axios'
import FilaUsuario from './FilaUsuario'
import UserContext from '../../../contexts/userContext'

function TablaUsuario() {
   
    const [actualizar,setActualizar] = useState(false)
    const {user}  = useContext(UserContext);
   
        return (
            <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>apellidos</th>
                <th>correo</th>
                <th>username</th>
                <th>CI</th>
                <th>Actualizar</th>
              </tr>
            </thead>
            <tbody>
              
               <FilaUsuario 
               usuario ={user} 
               setActualizar={setActualizar} 
               actualizar={actualizar}/>
            
            </tbody>
          </Table>
        )

    
}

export default TablaUsuario
