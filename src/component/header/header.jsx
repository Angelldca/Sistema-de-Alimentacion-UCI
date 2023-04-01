import "../header/header.css";
import React, { useState, useContext } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, useNavigate } from "react-router-dom";

import "../header/header.css";
import UserContext from "../../contexts/userContext";
import { Button, NavItem } from "react-bootstrap";


const HeaderPrueba = (args) => {
  const { user, logOutUser}  = useContext(UserContext);
  const navigate = useNavigate()
  const logOutClick =(e)=>{
    logOutUser();
    navigate('/')
  }
  return (
    <div className="containerNavbar">
      <Navbar collapseOnSelect expand="lg" id="header" fixed="top">
        <Container>
          <Link to="/" id="logo">
            <p>SIGA</p>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav_header">
            <Nav className="mt-4" style={{ alignItems: "baseline" }}>
            
                <Link className="dropdown-item opUsuario" to={`usuarios`}>
                  <p className="dropdwon_items usuarios" style={{ color: "white" }}>Usuarios</p>
                </Link>
            

            <NavDropdown title="Reserva" id="collasible-nav-dropdown">
                <Link className="dropdown-item" to={`reservatodas`}>
                  <p className="dropdwon_items">Listado de reservas</p>
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to={`actualizarReserva`}>
                  <p className="dropdwon_items">Mis reservas</p>
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to={`reserva`}>
                  <p className="dropdwon_items">Reservar</p>
                </Link>
              </NavDropdown>
              <NavDropdown title="Facturas" id="collasible-nav-dropdown">
                <Link className="dropdown-item" to={`misfacturas`}>
                  <p className="dropdwon_items">Mis Factura</p>
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to={`factura`}>
                  <p className="dropdwon_items">Facturas</p>
                </Link>
              </NavDropdown>
              <NavDropdown title="Menu" id="collasible-nav-dropdown">
                <Link className="dropdown-item" to={`menu`}>
                  <p className="dropdwon_items">Crear Menu</p>
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to={`menu/menuViewTodos`}>
                  <p className="dropdwon_items">Listar Menu</p>
                </Link>
                <Link className="dropdown-item" to={`menu/menuView`}>
                  <p className="dropdwon_items">Listar Menu disponibles</p>
                </Link>
              </NavDropdown>
              <NavDropdown title="Platos" id="collasible-nav-dropdown">
                <Link className="dropdown-item" to={`plato`}>
                  <p className="dropdwon_items">Crear Platos</p>
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to={`plato/platosview`}>
                  <p className="dropdwon_items">Listar</p>
                </Link>
              </NavDropdown>
            
              <Link  to="actualizar">
                <p>{user.username}</p>
              </Link>
            </Nav>
            <Image rounded src="../../img/user.png" placeholder="img" style={{width:"50px"}}/>
            <Button 
              variant="outline-light" 
              style={{width:"100px", marginRight:"0px", marginLeft:"10px"}}
              onClick={logOutClick}
              >
                Log out
              </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderPrueba;
