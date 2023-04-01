import Table from "react-bootstrap/Table";
//GrDocumentUpdate  RiDeleteBin5Line
import React, { useState, useEffect } from "react";

import Filas from "./filas";

function TableGeneral(props) {
  const [dataResult, setDataResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [actualizar, setActualizar] = useState(false);


  useEffect(() => {
    fetch("http://localhost:8080/plato")
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
          <th>Nombre</th>
          <th>Medida</th>
          <th>Precio</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {dataResult.map((plato,index) => (
         <Filas key={plato.id_plato}
          plato ={plato} index ={index} 
          setActualizar={setActualizar} 
          actualizar={actualizar}/>
        ))}
      </tbody>
    </Table>
  );
}

export default TableGeneral;
