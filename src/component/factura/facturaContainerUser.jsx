import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../contexts/userContext';
import TableFactura from './TablaFactura';
import axios from 'axios';

function FacturaContainerUser() {
    const [dataResult, setDataResult] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [actualizar, setActualizar] = useState(false);
    const {user}  = useContext(UserContext);

    useEffect(() => {
         axios.post('http://localhost:8080/factura/user',user,{ 
            headers: { 'Content-Type': 'application/json' }
          })
       .then(response => {
    
       setDataResult(response.data)
       setIsLoading(false)
      
    })
       .catch(error => {
     console.log(error);
    });
      }, [actualizar]);
      if(isLoading){
        return(
          <h3>No hay facturas disponibles</h3>
        )
      }
    return (
        <div>
            <TableFactura
             isLoading={isLoading} 
            facturas={dataResult}
            actualizar={actualizar}
            setActualizar={setActualizar}
            />
        </div>
    )
}

export default FacturaContainerUser
