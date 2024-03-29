import React, { useEffect, useState, useContext } from 'react'
import CardMenu from './Cards'
import './cards.css'
import { generarListaMenuXfehca } from '../../utils/Utils';
import UserContext from '../../contexts/userContext';
import { useLocation } from 'react-router-dom';

const  CardContainer = ({reservar, todos})=> {
  const {actualizaHistorial, historial}  = useContext(UserContext);
  const location = useLocation();
  
  useEffect(()=>{
    actualizaHistorial(location.pathname.split("/"));
  },[location])

    const [data,setData] =useState();
    const [menuFecha,setMenuFecha] =useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [actualizar, setActualizar] = useState(false);
    useEffect(()=>{
      if(!todos){
        fetch("http://localhost:8080/menu")
        .then((response)=> response.json())
        .then((response) =>{
          
          setData(response)
          setIsLoading(false);
          
        })
        .catch(err=>{
          
          setMenuFecha([])
        })
      }else{
        fetch("http://localhost:8080/menu/todos")
        .then((response)=> response.json())
        .then((response) =>{
          
          setData(response)
          setIsLoading(false);
          
        })
        .catch(err=>{
          
          setMenuFecha([])
        })
      }
      
                  
    },[actualizar])
    useEffect(()=>{
       
      setMenuFecha(generarListaMenuXfehca(data));
    },[data])
   
   
    
    if (isLoading || menuFecha.length ===0 ) {
        // ⬅️ si está cargando, mostramos un texto que lo indique
        return (
          <div className="App">
            <h1>Todavia no hay menu disponibles.</h1>
          </div>
        );
      }
     
    return (
        <div style={{width:"1300px"}}>
           <h3>Menu disponibles</h3>
          <div className="col-md 10 cardContainer">
         
              {menuFecha.map((menu,index)=>(
               
               <CardMenu 
               reservar={reservar}
               menu={menu} 
               index={index} 
               key={index} 
               setActualizar={setActualizar} 
               actualizar={actualizar} />
              ))}
            
              
        </div>
        </div>
      
    )
}

export default CardContainer
