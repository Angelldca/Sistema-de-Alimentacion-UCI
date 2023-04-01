import React, { useContext, useState } from 'react'
import CardBodyActualizar from './CardBodyActualizar';
import UserContext from '../../../contexts/userContext';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
import 'moment-timezone';
import { formatFechaES } from '../../../utils/Utils';
function CardMenuActualizar({ setActualizar, actualizar, menu }) {
  
    const {user}  = useContext(UserContext);
    
    const [menuReserva, setMenuReserva] = useState([]);
   
  
   
  
    //const objetoFecha = moment(`${menu[0].fecha}`, 'YYYY-MM-DD');
   // const fechaNueva = objetoFecha.subtract(1, 'day');
    const fecha =   formatFechaES(`${menu[0].fecha}`)
  
    const menuReservar = (m,cheksPlatos =[], id_reserva) => {
      let newObj = menuReserva;
      let indiceObjeto = newObj.findIndex(obj => obj.menu.id_menu === m.id_menu);
     
        if (indiceObjeto !== -1) {  
        newObj[indiceObjeto] = {menu:m, id_platosMenu:cheksPlatos,usuarioReserva:user,id_reserva};
        setMenuReserva(newObj)
      }else{
       
        setMenuReserva([...menuReserva, {menu:m, id_platosMenu:cheksPlatos,usuarioReserva:user,id_reserva}])
      }
     // console.log(id_reserva)
    
      
    };
    const handlerReservar =async (event)=>{
      event.preventDefault();
      
        menuReserva.forEach((reserva)=>{
            if(reserva.id_platosMenu.length ==0 ){
              axios.delete(`http://localhost:8080/reserva/deleteReserva/?id=${reserva.id_reserva}`)
              .then(response=>{
                  setActualizar(!actualizar);

              })
            }else{
                axios.put(`http://localhost:8080/reserva/updateReserva/${reserva.id_reserva}`,reserva,{ 
                    headers: { 'Content-Type': 'application/json' }
                  })
                  .then(response => {
                   //setData(response.data);
                   Swal.fire(
                    'Reserva actualizada!',
                    `${formatFechaES(response.data.fecha_reserva)}`,
                    'success'
                  )
             
                 })
               .catch(error => {
                 console.log(error)
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: `${error.response.data.message}`,
                  footer: 'Algo salió mal'
                })
               });
            }
         
         
        });
      setActualizar(!actualizar);
     
  }
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
        menu.forEach((m)=>{
             axios.delete(
                `http://localhost:8080/reserva/deleteReserva/?id=${m.id_reserva}`
              ).then( (response) => {
                  
                  //  Swal.fire("Eliminado!", `${response.data.id_reserva}`, "success");
                  setActualizar(!actualizar);
                })
                .catch((error) => {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.response.data.message}`,
                  });
                });
                
        })
        
      }
    });
    
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
              <CardBodyActualizar
              menuReservar={menuReservar}
              menu={menu} 
              setMenuReserva
              key={index}>
              
              </CardBodyActualizar>
            ))}
            <Card.Footer
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Button
                
                style={{ display: "flex", justifyContent: "space-around" }}
                onClick={handlerReservar}
              >
                Actualizar
              </Button>
              <Button
          style={{ color: "black" }}
          variant="danger"
          onClick={deleteReserva}
        >
          <RiDeleteBin5Line />
        </Button>
            </Card.Footer>
          </Card>
          <br />
        </div>
      );
    
    
  }
  

export default CardMenuActualizar
