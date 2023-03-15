import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaTelegramPlane, FaWindows } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { Outlet, Navigate, redirect, Link} from "react-router-dom";
import '../../cards/cards.css';
import { useState } from "react";
import CardBody from "./CardBody";
import Swal from "sweetalert2";
import moment from 'moment'
import 'moment-timezone';
import { useNavigate } from "react-router-dom";
import useFetchPost from "../../../hooks/useFetchPost";


function CardMenuActualizar({ menu, index, chekboxs, evento }) {
  
  const [menuActualizar, setMenuActualizar] = useState({})
  const [formData,setFormData] = useState({
    evento:"",
    fecha:"",
    id_menu :"",
    precio :"",
    id_plato:[]
})
  

  const objetoFecha = moment(`${menu[0].fecha}`, 'YYYY-MM-DD').locale('es');
  const fecha = objetoFecha.format("dddd, D [de] MMMM [de] YYYY");
  
   
  const actualizarMenu =async (e) => {
       
     for (const element of menu) {
      if (element.evento === evento) {
        setMenuActualizar(element)
      }
    }
    const dataSend ={
      evento: menuActualizar.evento,
      fecha: menuActualizar.fecha,
      id_menu: menuActualizar.id_menu,
      id_plato: chekboxs,
      precio: menuActualizar.precio
    }

    if(chekboxs.length >0 && dataSend.id_menu !== undefined ){
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then( async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
         // await  TODO
         await setFormData(dataSend)
          const options =  {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataSend),
          };
          try {

          fetch(`http://localhost:8080/menu/updateMenu/${dataSend.id_menu}`,options)
          .then(response=> response.json())
          .then(response =>{

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
   
      //location.reload()
      
    }
    if(chekboxs.length === 0){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Debe seleccionar al menos un plato`,
      });
    }
        
         //console.log(evento)
  };

 
    return (
      <div className="m-2 cards">
        <Card border="primary" className="cardMenu" style={{ height: "690px" }}>
          <Card.Header style={{ display: "flex", maxHeight: "58px" }}>
            {`${
              // JSON.stringify(menu)
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
