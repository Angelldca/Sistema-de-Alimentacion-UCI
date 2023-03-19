import { TfiWrite } from "react-icons/tfi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";
import moment from 'moment'
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "../Plato/plato.css";
import React from "react";


export default function FilasFactura({ factura, index }) {
    
    const objetoFecha = moment(`${factura.reserva.fecha_reserva}`, 'YYYY-MM-DD');
    
    const fechaNueva = objetoFecha.subtract(1, 'day');
    const fecha = fechaNueva.format("dddd, D [de] MMMM [de] YYYY");
    const exportPdf = (e)=>{
        console.log("Exportar")
        fetch('http://localhost:8080/factura/exportPdf', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(factura)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      // Crear un enlace para descargar el archivo
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'factura.pdf';
      link.click();
    })
    .catch(error => console.error('Error:', error));
    }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {fecha}
      
      </td>
      <td>
         {factura.estado}
      </td>
      <td>
        {`${factura.usuario.nombre} ${factura.usuario.apellidos}`}
      </td>
      <td>
        {factura.reserva.precio}
      </td>
      <td>
        <Button
          style={{ color: "black" }}
          className="ms-3 me-3"
          variant="outline-info"
          onClick={exportPdf}
        >
          <TfiWrite />
        </Button>
     
      </td>
    </tr>
  );
}
