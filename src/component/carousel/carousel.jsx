import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../img/prueba.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>siga.uci.cu</h3>
          <p>Sistema de Gestión y Reserva de la Universidad de las Ciencias Informáticas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../img/prueba1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Informatización UCI</h3>
          <p>
            Contáctenos para cualquier información
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

//render(<ControlledCarousel />);

export default ControlledCarousel;