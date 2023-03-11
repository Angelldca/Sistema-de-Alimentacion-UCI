import React from 'react'
import TableMenuPlato from './TableMenuPlato/TableMenuPlato'


function ListarPlatosMenu({getChekbox}) {
    
    return (
        <div className="listaPlatosMenu">
            <TableMenuPlato getChekbox={getChekbox}></TableMenuPlato>
            
        </div>
    )
}

export default ListarPlatosMenu
