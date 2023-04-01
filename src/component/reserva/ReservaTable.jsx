import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import ReservaFilas from './ReservaFila';


function ReservaTable() {
    const [dataResult, setDataResult] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [actualizar, setActualizar] = useState(false);
    const [errorResult, setError] = useState();
  
    useEffect(() => {
      fetch("http://localhost:8080/reserva")
        .then((data) => data.json())
        .then((data) => {
          setDataResult(data);
          setIsLoading(false);
        });
    }, [actualizar]);
    
       
      
        if (isLoading) {
          // ⬅️ si está cargando, mostramos un texto que lo indique
          return (
            <div className="App">
              <h1>Cargando...</h1>
            </div>
          );
        }
        return (
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Precio</th>
                <th>Nombre y apellidos</th>
                <th>Username</th>
                <th>CI</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {dataResult.map((reserva,index) => (
               <ReservaFilas key={reserva.id_reserva}
                reserva ={reserva} index ={index} 
                setActualizar={setActualizar} 
                actualizar={actualizar}/>
              ))}
            </tbody>
          </Table>
    )
}

export default ReservaTable
