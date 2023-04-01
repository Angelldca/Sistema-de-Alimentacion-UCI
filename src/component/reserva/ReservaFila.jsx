import { TfiWrite } from "react-icons/tfi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";

import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "../Plato/plato.css";
import React, { useRef, useState } from "react";
import useFetchPost from "../../hooks/useFetchPost";
import { formatFechaES } from "../../utils/Utils";
import axios from "axios";

export default function ReservaFilas({ reserva, index, setActualizar, actualizar }) {
  const btnCancelar = useRef(null);
  const inputsRef = useRef(null);
  const inputsRefNombrePlato = useRef(null);
  const inputsRefPrecio = useRef(null);
  const sendRef = useRef(null);
  const [formData, setFormData] = useState({
    fecha: formatFechaES(reserva.fecha_reserva),
    estado: reserva.estado,
    precio: reserva.precio,
    nombre: reserva.usuarioReserva.nombre + " "+  reserva.usuarioReserva.apellidos,
    username:  reserva.usuarioReserva.username,
    ci: reserva.usuarioReserva.ci,
  });

  const deleteReserva = () => {
    Swal.fire({
      title: "Estas seguro que desea eliminar el registro?",
      text: "Esta accion no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(
          `http://localhost:8080/reserva/deleteReserva/?id=${reserva.id_reserva}`,
          { method: "DELETE" }
        ).then((response) => {
           
            if(response.error === 'Bad Request'){
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${response.message}`,
              });
            }else{
              Swal.fire("Eliminado!", `${response.data.id_reserva}`, "success");
              setActualizar(!actualizar);

            }

          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${error.response.data.message}`,
            });
          });
      }
    });
  };
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // console.log(formData)
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {" "}
        <input
          type="text"
          value={formData.fecha}
          className="offStyle"
          disabled
          ref={inputsRef}
          name="fecha"
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={formData.estado}
          className="offStyle"
          disabled
          ref={inputsRefNombrePlato}
          name="estado"
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={formData.precio}
          className="offStyle"
          disabled
          ref={inputsRefPrecio}
          name="precio"
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={formData.nombre}
          className="offStyle"
          disabled
          
          name="nombre"
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={formData.username}
          className="offStyle"
          disabled
          
          name="username"
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={formData.ci}
          className="offStyle"
          disabled
          
          name="ci"
          onChange={handleInputChange}
        />
      </td>
      <td>

        <Button
          style={{ color: "black" }}
          variant="outline-danger"
          onClick={deleteReserva}
        >
          <RiDeleteBin5Line />
        </Button>
      </td>
    </tr>
  );
}
