import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../../contexts/userContext';
import axios from 'axios';

import {generarListaMenuXfehcaReserva } from '../../../utils/Utils';
import CardMenuActualizar from './CardMenuActualizar';
import { TfiRulerAlt2 } from 'react-icons/tfi';

function ReservasRealizadas() {

    const [menus,setMenus] =useState([]);
    const [menuFecha,setMenuFecha] =useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [actualizar, setActualizar] = useState(false);
    const {user} = useContext(UserContext);

    useEffect(()=>{
       
        axios.get(`http://localhost:8080/reserva/reservausuario/${user.id_usuario}`)
        .then((response) =>{
          let arr= [];
          
          response.data.forEach( async reserva => {
             
              arr.push(await {...reserva.menu,id_platosMenu:reserva.id_platosMenu,id_reserva:reserva.id_reserva})
        });
     
            setIsLoading(false);

            setMenus(arr)

      
        
        })
        .catch(error=>{
          
          setMenuFecha([])
        })
      
      
                  
    },[actualizar])

    useEffect(()=>{
      
        if(menus.length ===0 )
        setIsLoading(true);
      setMenuFecha(generarListaMenuXfehcaReserva(menus));
    },[menus])
   
   
   
    
    if (isLoading || menuFecha.length ==0) {
        // ⬅️ si está cargando, mostramos un texto que lo indique
        return (
          <div className="App">
            <h1>No se han realizado reservas</h1>
          </div>
        );
      }
     
    return (
        <>
          <h3>Menu disponibles</h3>
         
          <div className="col-md 10 cardContainer">
              {menuFecha.map((menu,index)=>(
               
               <CardMenuActualizar 
               menu={menu} 
               index={index} 
               key={index} 
               setActualizar={setActualizar} 
               actualizar={actualizar} />
              ))}
            
              
        </div>
        </>
      
    )
}

export default ReservasRealizadas
