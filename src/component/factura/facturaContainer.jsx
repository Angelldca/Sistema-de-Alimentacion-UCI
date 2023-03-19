import React, { useEffect, useState } from 'react'
import TableFactura from './TablaFactura'

function FacturaContainer() {
    const [dataResult, setDataResult] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [actualizar, setActualizar] = useState(false);
    
    useEffect(() => {
        fetch("http://localhost:8080/factura")
          .then((data) => data.json())
          .then((data) => {
            setDataResult(data);
            setIsLoading(false);
          });
      }, [actualizar]);
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

export default FacturaContainer
