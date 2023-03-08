import { TfiWrite } from "react-icons/tfi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";

import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "../Plato/plato.css";
import React, { useRef, useState } from "react";
import useFetchPost from "../../hooks/useFetchPost";

export default function Filas({ plato, index, setActualizar, actualizar }) {
  const btnCancelar = useRef(null);
  const inputsRef = useRef(null);
  const inputsRefNombrePlato = useRef(null);
  const inputsRefPrecio = useRef(null);
  const sendRef = useRef(null);
  const [formData, setFormData] = useState({
    nombre_plato: plato.nombre_plato,
    precio_plato: plato.precio_plato,
    gramaje: plato.gramaje,
  });

  const enableUpdatePlato = () => {
    // btnCancelar.current.style.visibility = "visible"
    btnCancelar.current.style.visibility = "visible";
    sendRef.current.style.visibility = "visible";
    inputsRef.current.disabled = false;
    inputsRefNombrePlato.current.disabled = false;
    inputsRefPrecio.current.disabled = false;
    inputsRef.current.style.border = "1px solid #ccc";
    inputsRefNombrePlato.current.style.border = "1px solid #ccc";
    inputsRefPrecio.current.style.border = "1px solid #ccc";
  };
  const cancelUpdate = () => {
    //desabilitar inputs y botones de cancelar y actualizar
    btnCancelar.current.style.visibility = "hidden";
    sendRef.current.style.visibility = "hidden";
    inputsRef.current.disabled = true;
    inputsRefNombrePlato.current.disabled = true;
    inputsRefPrecio.current.disabled = true;
    inputsRef.current.style.border = "none";
    inputsRefNombrePlato.current.style.border = "none";
    inputsRefPrecio.current.style.border = "none";
    //volver al nombre original
    setFormData({
      nombre_plato: plato.nombre_plato,
      precio_plato: plato.precio_plato,
      gramaje: plato.gramaje,
    });
  };
  const deletePlato = () => {
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
        await fetch(
          `http://localhost:8080/plato/deletePlato/?id=${plato.id_plato}`,
          { method: "DELETE" }
        )
          .then((response) => response.json())
          .then((response) => {
            Swal.fire("Eliminado!", `${response.nombre_plato}`, "success");
            setActualizar(!actualizar);
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${err}`,
            });
          });
      }
    });
  };
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // console.log(formData)
  };
  const sendUpdate = () => {
    console.log("send update");
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    try {
      const data = useFetchPost(
        `http://localhost:8080/plato/updatePlato/${plato.id_plato}`,
        options
      );
      Swal.fire("Actualizado!", `${data.nombre_plato}`, "success");
      setActualizar(actualizar);
      //desabilitar inputs y botones de cancelar y actualizar
      btnCancelar.current.style.visibility = "hidden";
      sendRef.current.style.visibility = "hidden";
      inputsRef.current.disabled = true;
      inputsRefNombrePlato.current.disabled = true;
      inputsRefPrecio.current.disabled = true;
      inputsRef.current.style.border = "none";
      inputsRefNombrePlato.current.style.border = "none";
      inputsRefPrecio.current.style.border = "none";
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}`,
      });
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {" "}
        <input
          type="text"
          value={formData.nombre_plato}
          className="offStyle"
          disabled
          ref={inputsRef}
          name="nombre_plato"
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={formData.gramaje}
          className="offStyle"
          disabled
          ref={inputsRefNombrePlato}
          name="gramaje"
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={formData.precio_plato}
          className="offStyle"
          disabled
          ref={inputsRefPrecio}
          name="precio_plato"
          onChange={handleInputChange}
        />
      </td>
      <td>
        <Button
          style={{ color: "black" }}
          className="ms-3 me-3"
          variant="outline-info"
          onClick={enableUpdatePlato}
        >
          <TfiWrite />
        </Button>
        <Button
          style={{ color: "black" }}
          variant="outline-info"
          onClick={deletePlato}
        >
          <RiDeleteBin5Line />
        </Button>
        <Button
          ref={btnCancelar}
          style={{ color: "black", visibility: "hidden" }}
          variant="outline-info"
          onClick={cancelUpdate}
          className="ms-3 me-3"
        >
          <MdOutlineCancel />
        </Button>

        <Button
          style={{ color: "black", visibility: "hidden" }}
          variant="outline-info"
          onClick={sendUpdate}
          className="ms-1 me-1"
          ref={sendRef}
        >
          <RiSendPlaneLine />
        </Button>
      </td>
    </tr>
  );
}
