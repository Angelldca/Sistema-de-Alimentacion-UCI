import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function InfoFooter({texto, encabezado}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p variant="primary" onClick={handleShow} className="me-2">
        {encabezado}
      </p>
      <Offcanvas show={show} onHide={handleClose}placement='bottom'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{encabezado}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {texto}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



export default InfoFooter