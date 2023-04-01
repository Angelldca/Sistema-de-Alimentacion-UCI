
import React, { useState, useContext } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, useNavigate } from "react-router-dom";

import "../header/header.css";
import UserContext from "../../contexts/userContext";
import { Button } from "react-bootstrap";



function HeaderUser() {
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
         <Link className="dropdown-item" to="" bg="ligth" id="logo">
            <p>SIGA</p>
         </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav_header">
            <Nav className="mt-4" style={{ alignItems: "baseline" }}>
              <NavDropdown title="Reserva" id="collasible-nav-dropdown">
                <NavDropdown.Divider />
                <Link className="dropdown-item" to={`actualizarReserva`}>
                  <p className="dropdwon_items">Mis reservas</p>
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to={`reserva`}>
                  <p className="dropdwon_items">Reservar</p>
                </Link>
              </NavDropdown>
              <Link className="dropdown-item" to={`misfacturas`}>
                  <p >Facturas</p>
              </Link>
             
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
    )
}

export default HeaderUser
