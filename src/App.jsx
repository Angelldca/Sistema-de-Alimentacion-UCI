

import "./App.css";

import ErrorPage from "./component/Error/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin_Panel from "./component/Admin_Panel/Admin_Panel";
import Menu from "./component/menu/menu";
import Reserva from "./component/reserva/Reserva";
import Plato from "./component/Plato/Plato";
import PlatoView from "./component/Plato/PlatoView";
import HomeAdmin from "./component/Home/Home";
import Login from "./component/Login/Login";

import { Outlet } from "react-router-dom";
import ListarMenu from "./component/menu/ListarMenu";
import ActualizarMenu from "./component/menu/ActualizarMenu";
import SignUp from "./component/SignUp/SignUp";
import UserState from "./contexts/userState";
import FacturaContainer from "./component/factura/facturaContainer";
import FacturaContainerUser from "./component/factura/facturaContainerUser";
import ProtecteRoute from "./component/Protecte/ProtecteRoute"
import UserPanel from "./component/UserPanel/UserPanel";
import ListarMenuUsuario from "./component/UserPanel/ListarMenuUsuario";
import ListarMenuTodos from "./component/menu/ListarMenuTodos";
import ReservaListAdmin from "./component/reserva/ReservaListAdmin";
import ReservasRealizadas from "./component/reserva/ModificarReservas/ReservasRealizadas";
import UsuariosContainer from "./component/Usuarios/UsuariosContainer";
import UserPanelActualizar from "./component/UserPanel/actualizar/UserPanelActualizar";
import Reporte from "./component/Reportes/Reporte";
function App() {


  const router = createBrowserRouter([
    {
      path: "protect/",
      element: <ProtecteRoute/>,
      children:[
        {
    
          path: "admin",
          element: <Admin_Panel />,
          children: [
            {
              path: "",
              element: <HomeAdmin />,
            },
            {
              path: "menu",
              element: <Menu />,
            },
            {
              path: "usuarios",
              element: <UsuariosContainer />,
            },
            {
              path: "actualizar",
              element: <UserPanelActualizar />,
            },
            {
              path: "menu/menuView",
              element: <ListarMenu />,
    
            },
            {
              path: "menu/menuViewTodos",
              element: <ListarMenuTodos />,
    
            },
            {
              path: "menu/update",
              element: <ActualizarMenu />,
              
            },
            {
              path: "reserva",
              element: <Reserva />,
            },
            {
              path: "actualizarReserva",
              element: <ReservasRealizadas />,
            },
            {
              path: "reservatodas", 
              element: <ReservaListAdmin/>,
            },
            {
              path: "factura",
              element: <FacturaContainer />,
            },
            {
              path: "misfacturas",
              element: <FacturaContainerUser />,
            },
            {
              path: "plato",
              element: <Plato />,
            }, 
            {
              path: "plato/platosview",
              element: <PlatoView />,
            },
            {
              path:"reporte",
              element: <Reporte/>
            }
          ],
        },
        {
          path: "user",
          element: <UserPanel/>,
          children:[
            {
              path: "",
              element: <ListarMenuUsuario />,
            },
            {
              path: "actualizar",
              element: <UserPanelActualizar />,
            },
            {
              path: "misfacturas",
              element: <FacturaContainerUser />,
            },
            {
              path: "reserva",
              element: <Reserva />,
            },
            {
              path: "actualizarReserva",
              element: <ReservasRealizadas />,
            },
          ]
        },
      ]
    },
   
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
      <UserState>
        <div className="App">
          <RouterProvider router={router} />
          <Outlet />
          
        </div>

      </UserState>
    
  );
}

export default App;
