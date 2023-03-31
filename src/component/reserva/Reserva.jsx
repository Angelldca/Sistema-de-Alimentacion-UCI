import React from 'react'
import CardContainer from '../cards/cardContainer'


function Reserva() {
    return (
        <div>
             <h4>Gestionar Reserva</h4>
      <hr />
      <div>
          <CardContainer reservar={true}/>
         
      </div>
      {/*
      
      <CreatePlato/>
      <PlatoView></PlatoView>
      */}
        </div>
    )
}

export default Reserva
