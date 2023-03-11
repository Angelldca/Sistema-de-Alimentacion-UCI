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
import { PlatoContext } from "./contexts/platoContext";

function App() {
  const [platos, setPlatos] = useState();

  const router = createBrowserRouter([
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
          path: "reserva",
          element: <Reserva />,
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
      path: "user/",
      element: <h1>Pannel de usuario</h1>,
    },
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <PlatoContext.Provider value={{ name: "pepe" },[0,1]}>
      <div className="App">
        <RouterProvider router={router} />
        <Outlet />
      </div>
    </PlatoContext.Provider>
  );
}

export default App;
