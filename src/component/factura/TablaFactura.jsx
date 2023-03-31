import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import FilasFactura from "./facturaFilas";



function TableFactura({isLoading, facturas, actualizar, setActualizar}) {
   

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
            <th>Nombre</th>
            <th>Precio</th>
            <th>Exportar PDF</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map((factura,index) => (
           <FilasFactura key={factura.id_factura}
           factura ={factura} index ={index} 
            setActualizar={setActualizar} 
            actualizar={actualizar}/>
          ))}
        </tbody>
      </Table>
    );
  }
  
  export default TableFactura;