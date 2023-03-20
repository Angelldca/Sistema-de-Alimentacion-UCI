
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
              <Link className="dropdown-item" to="reserva" bg="ligth">
                <p>Reserva</p>
              </Link>
              <Link className="dropdown-item" to={`misfacturas`}>
                  <p >Facturas</p>
              </Link>
              <Button 
              variant="outline-light" 
              style={{width:"300px", marginRight:"10px"}}
              onClick={logOutClick}
              >
                Log out
              </Button>
              <Nav.Link eventKey={2} href="#">
                <p>{user.username}</p>
              </Nav.Link>
            </Nav>
            <Image rounded src="../../img/user.png" placeholder="img" style={{width:"50px"}}/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}

export default HeaderUser
