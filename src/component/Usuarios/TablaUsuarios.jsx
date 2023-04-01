import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import FilasUsuario from './FilasUsuario'
import axios from 'axios'
function TablaUsuarios() {
    const [usuarios,setUsuarios] = useState([])
    const [actualizar,setActualizar] = useState(false)
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        axios.get(`http://localhost:8080/user`)
        .then(response=>{
            setUsuarios(response.data)
            console.log(response.data)
            setIsLoading(false)
        }).catch(err=>{
            console.log(err)
        })
    },[actualizar])
    if(isLoading){
        return (
            <h1>
                Cargando...
            </h1>
        )
    }else{
        return (
            <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>apellidos</th>
                <th>correo</th>
                <th>username</th>
                <th>Rol</th>
                <th>Actualizar/Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario,index) => (
               <FilasUsuario key={usuario.id_usuario}
               usuario ={usuario} index ={index} 
                setActualizar={setActualizar} 
                actualizar={actualizar}/>
              ))}
            </tbody>
          </Table>
        )

    }
}

export default TablaUsuarios
