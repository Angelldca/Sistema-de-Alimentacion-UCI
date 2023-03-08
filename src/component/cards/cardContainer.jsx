import React from 'react'
import CardMenu from './Cards'
import './cards.css'

const  CardContainer = ()=> {
    return (
        <>
          <h3>Menu disponibles</h3>
          <div className="col-md 10 cardContainer">
            <CardMenu/>
            <CardMenu/>
            <CardMenu/>
            <CardMenu/>
           
            
            
        </div>
        </>
      
    )
}

export default CardContainer
