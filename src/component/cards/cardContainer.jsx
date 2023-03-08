import React, { useEffect, useState } from 'react'
import CardMenu from './Cards'
import './cards.css'

const  CardContainer = ({reservar})=> {
    const [data,setData] =useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
          fetch("http://localhost:8080/menu")
          .then((response)=> response.json())
          .then((response) =>{
             setData(response)
             setIsLoading(false);
          })
    },[])
    console.log(data)
    if (isLoading) {
        // ⬅️ si está cargando, mostramos un texto que lo indique
        return (
          <div className="App">
            <h1>Cargando...</h1>
          </div>
        );
      }
    return (
        <>
          <h3>Menu disponibles</h3>
          <div className="col-md 10 cardContainer">
              {data.map((menu,index)=>(
                  <CardMenu reservar={reservar} menu={menu} index={index} key={menu.id_menu} />

              ))}
            
              
        </div>
        </>
      
    )
}

export default CardContainer
