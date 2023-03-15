import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaTelegramPlane } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { Outlet, Navigate, redirect, Link} from "react-router-dom";
import "./cards.css";
import { useState } from "react";
import CardBody from "./cardBody";
import Swal from "sweetalert2";
import moment from 'moment'
import 'moment-timezone';
import { useNavigate } from "react-router-dom";
function CardMenu({ reservar, menu, index, setActualizar, actualizar }) {
  const navigate = useNavigate();
  let now = new Date().toLocaleDateString("es-es", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });


  const objetoFecha = moment(`${menu[0].fecha}`, 'YYYY-MM-DD');
  const fechaNueva = objetoFecha.subtract(1, 'day');
  const fecha = fechaNueva.format("dddd, D [de] MMMM [de] YYYY");


  

  const actualizarMenu = (e) => {
    //navigate('menu/update');
    //redirect("menu/update");
    //window.location = "menu/update";
  };
  const deleteMenus = (event) => {
    //http://localhost:8080/menu/deleteMenu/id
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
        menu.forEach(async function (m) {
          console.log(m);
          await fetch(`http://localhost:8080/menu/deleteMenu/${m.id_menu}`, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((response) => {
              console.log(response);
              Swal.fire("Eliminado!", `${response}`, "success");
              setActualizar(!actualizar);
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${err}`,
              });
            });
        });
      }
    });
  };
  if (reservar === true) {
    return (
      <div className="m-2 cards">
        <Card border="primary" className="cardMenu">
          <Card.Header>
            {`${
              fecha
            }`}
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ textDecorationLine: "underline" }}>
              {menu.evento}
            </Card.Title>
            <Card.Text>
              {menu.id_plato.map((id_plato, index) => (
                <>
                  <span>{id_plato} </span>
                  <span> $0.34 </span>
                  <input key={id_plato} type="checkbox" />
                  <br />
                </>
              ))}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button>Reservar</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="m-2 cards">
        <Card border="primary" className="cardMenu" style={{ height: "690px" }}>
          <Card.Header style={{ display: "flex", maxHeight: "58px" }}>
            {`${
              // JSON.stringify(menu)
              fecha
            }`}
            <Button variant="info" style={{ marginLeft: "20px" }}>
              <FaTelegramPlane />
            </Button>
          </Card.Header>
          {menu.map((menu, index) => (
            <CardBody menu={menu} key={index}></CardBody>
          ))}
          <Card.Footer
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Button
              variant="outline-info"
              style={{ display: "flex", justifyContent: "space-around" }}
             
            >
              <Link to={`/admin/menu/update`} state={menu}>
                <TfiWrite />
              </Link>
            </Button>
            <Button
              variant="outline-danger"
              style={{ display: "flex", justifyContent: "space-around" }}
              onClick={deleteMenus}
            >
              <MdDeleteOutline />
            </Button>
          </Card.Footer>
        </Card>
        <br />
      </div>
    );
  }
}

export default CardMenu;
