import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaTelegramPlane, FaWindows } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { Outlet, Navigate, redirect, Link} from "react-router-dom";
import '../../cards/cards.css';
import { useState, useEffect } from "react";
import CardBody from "./CardBody";
import Swal from "sweetalert2";
import moment from 'moment'
import 'moment-timezone';
import 'moment/locale/es';
import { formatFechaES } from "../../../utils/Utils";


function CardMenuActualizar({ menu, index, chekboxs, evento, setMenu }) {
  
  const [menuActualizar, setMenuActualizar] = useState({})
  const [dataSend,setDataSend] = useState({})

  
  const fecha  = formatFechaES(`${menu[0].fecha}`);
  useEffect(()=>{
    if(menuActualizar.id_menu !== undefined){
      setDataSend({
        estado:menuActualizar.estado,
        evento: menuActualizar.evento,
        fecha: menuActualizar.fecha,
        id_menu: menuActualizar.id_menu,
        id_plato: chekboxs,
        precio: menuActualizar.precio
      })
    }
   
  },[menuActualizar])
  useEffect(()=>{
    if(chekboxs.length >0 && dataSend.id_menu !== undefined){
      Swal.fire({
        title: 'Quieres guardar los cambios?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then( async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
         
          // await  TODO
         // setFormData(dataSend)
          const options =  {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataSend),
          };
          try {

          fetch(`http://localhost:8080/menu/updateMenu/${dataSend.id_menu}`,options)
          .then(response=> response.json())
          .then(async (response) => {
            let newM = await menu.map(m => {
              if (m.id_menu === response.id_menu) {
                return response;
              }
              return m;
            });
           await setMenu(newM)
            
            Swal.fire("Actualizado!", `${response.evento} del ${response.fecha}`, "success");
          })         
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${error}`,
            });
          }
        } else if (result.isDenied) {
          Swal.fire('Cambios no guardados', '', 'info')
        }
      })
    }
  },[dataSend])
   
  const actualizarMenu =async (e) => {
    if(chekboxs.length === 0){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Debe seleccionar al menos un plato`,
      });
    }else{
      
      for await (const element of menu) {
       if (element.evento === evento) {
         setMenuActualizar(element)
         break;
       }
     }
   
    }
  };

 
    return (
      <div className="m-2 cards">
        <Card border="primary" className="cardMenu" style={{ height: "690px" }}>
          <Card.Header style={{ display: "flex", maxHeight: "58px" }}>
            {`${
              fecha
            }`}
          
          </Card.Header>
          {menu.map((menu, index) => (
            <CardBody menu={menu} key={index}></CardBody>
          ))}
          <Card.Footer
            style={{ display: "flex", justifyContent: "space-around" }}
          >
           
            <Button
              variant="outline-danger"
              style={{ display: "flex", justifyContent: "space-around" }}
              onClick={actualizarMenu}
            >
             Aceptar
            </Button>
          </Card.Footer>
        </Card>
        <br />
      </div>
    );
  
}

export default CardMenuActualizar;
