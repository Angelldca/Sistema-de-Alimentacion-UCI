import "../header/header.css";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../header/header.css";
//import "../../img/angel.jpg"
const HeaderPrueba = (args) => {
  return (
    <div className = "containerNavbar">
      <Navbar collapseOnSelect expand="lg" id="header" fixed='top'>
        <Container>
          <Navbar.Brand href="#home" id="logo">
            <p>SIGA</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav_header">
            <Nav className="mt-4">
              <Nav.Link href="#reserva" bg="ligth">
                <p>Reserva</p>
              </Nav.Link>
              <Nav.Link href="#factura" bg="ligth">
                <p>Factura</p>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <p>Menu</p>
              </Nav.Link>
              <NavDropdown title="Platos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <p className="dropdwon_items">Crear Platos</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <p className="dropdwon_items">Actualizar Platos</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <p className="dropdwon_items">Eliminar Platos</p>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <p className="dropdwon_items">Listar</p>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">
                <p>Log out</p>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <p>angelldca</p>
              </Nav.Link>
            </Nav>
            <Image rounded src="../../img/angel.jpg" placeholder="img" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderPrueba;
