import React from 'react'
import "./asideMenu.css"
import { Link, useNavigate } from "react-router-dom";



function AsideMenu() {
    return (
        <div className="contOptions">
            <div className="asideMenuContainer">
                <ul>
                    <li>

                        <Link to={`reserva`} className="linkOp">
                            Crear Reserva
                        </Link>
                    </li>
                    <li>

                        <Link className="linkOp" to={`actualizarReserva`}>
                            Modificar/Eliminar Reserva
                        </Link>
                    </li>
                    <li>

                        <Link className="linkOp" to={`plato`}>
                           Crear Platos
                        </Link>
                    </li>
                    <li>

                        <Link className="linkOp" to={`plato/platosview`}>
                            Modificar/Eliminar Plato
                        </Link>
                    </li>
                    <li>
                        <Link className="linkOp" to={`menu`}>
                            Crear Menu
                        </Link>
                    </li>
                    <li>

                        <Link className="linkOp" to={`menu/menuViewTodos`}>
                           Modificar/Eliminar Menú
                        </Link>
                    </li>
                    <li>

                        <Link className="linkOp" to={`usuarios`}>
                           Modificar/Eliminar Usuario
                        </Link>
                    </li>
                    <li>

                        <Link className="linkOp" to={`reporte`}>
                           Reportes
                        </Link>
                    </li>
                    <li>

                        <Link className="linkOp" to={`factura`}>
                           Listar Facturas
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default AsideMenu
