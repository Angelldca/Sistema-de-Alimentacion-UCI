import "../header/header.css";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Outlet, Link, useLoaderData } from "react-router-dom";

import "../header/header.css";
//import "../../img/angel.jpg"
const HeaderPrueba = (args) => {
  return (
    <div className="containerNavbar">
      <Navbar collapseOnSelect expand="lg" id="header" fixed="top">
        <Container>
          <Navbar.Brand href="/admin" id="logo">
            <p>SIGA</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav_header">
            <Nav className="mt-4" style={{ alignItems: "baseline" }}>
              <Link to="/admin/reserva" bg="ligth">
                <p>Reserva</p>
              </Link>
              <Link to="/admin/factura" bg="ligth">
                <p>Factura</p>
              </Link>
              <NavDropdown title="Menu" id="collasible-nav-dropdown">
                <Link className="dropdown-item" to={`/admin/menu`}>
                  <p className="dropdwon_items">Crear Menu</p>
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to={`/admin/menu/menuView`}>
                  <p className="dropdwon_items">Listar Menu</p>
                </Link>
              </NavDropdown>
              <NavDropdown title="Platos" id="collasible-nav-dropdown">
                <Link className="dropdown-item" to={`/admin/plato`}>
                  <p className="dropdwon_items">Crear Platos</p>
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to={`/admin/plato/platosview`}>
                  <p className="dropdwon_items">Listar</p>
                </Link>
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
