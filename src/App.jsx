import { useState, useEffect } from "react";

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

import { Outlet, Navigate, redirect } from "react-router-dom";
import ListarMenu from "./component/menu/ListarMenu";
import ActualizarMenu from "./component/menu/ActualizarMenu";
import SignUp from "./component/SignUp/SignUp";
import UserState from "./contexts/userState";
import FacturaContainer from "./component/factura/facturaContainer";
import FacturaContainerUser from "./component/factura/facturaContainerUser";
import ProtecteRoute from "./component/Protecte/ProtecteRoute"
function App() {
  const [platos, setPlatos] = useState();

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
              path: "homeAdmin",
              element: <HomeAdmin />,
            },
            {
              path: "menu",
              element: <Menu />,
            },
            {
              path: "menu/menuView",
              element: <ListarMenu />,
    
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
            }, //platosview
            {
              path: "plato/platosview",
              element: <PlatoView />,
            },
          ],
        },
        {
          path: "user",
          element: <h1>Pannel de usuario</h1>,
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
