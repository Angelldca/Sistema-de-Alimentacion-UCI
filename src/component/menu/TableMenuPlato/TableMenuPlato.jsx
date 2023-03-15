import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import FilaMenuPlato from "./FilaMenuPlato";
import { Button } from "react-bootstrap";


function TableMenuPlato({getChekbox}) {
  const [result, setDataResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [actualizar, setActualizar] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8080/plato")
      .then((data) => data.json())
      .then((data) => {
        setDataResult(data);
        setIsLoading(false);
      });
  },[actualizar]);


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
          <th>Selecciona los platos</th>
        </tr>
      </thead>
      <tbody>
        {result.map((plato, index) => (
          <FilaMenuPlato
            plato={plato}
            index={index}
            getChekbox={getChekbox}
            key={plato.id_plato}
          ></FilaMenuPlato>
        ))}
      </tbody>
    </Table>
  );
}

export default TableMenuPlato;
