import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from "./component/Error/ErrorPage"

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Admin_Panel from './component/Admin_Panel/Admin_Panel';
import Menu from './component/menu/menu';
import Reserva from './component/reserva/Reserva';
import Plato from './component/Plato/Plato';
import PlatoView from './component/Plato/PlatoView';
import HomeAdmin from './component/Home/Home';
import Login from './component/Login/Login';
const router  = createBrowserRouter([
  {
    path:"home",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"admin",
        element: <Admin_Panel/>,
        children:[
          {
            path:"homeAdmin",
            element: <HomeAdmin/>,
          },
          {
            path:"menu",
            element: <Menu/>,
          },
          {
            path:"reserva",
            element: <Reserva/>,
          },
          {
            path:"plato",
            element: <Plato/>,
          }, //platosview
          {
            path:"plato/platosview",
            element: <PlatoView/>,
          },
        ]
      },
      {
        path:"user/",
        element: <h1>Pannel de usuario</h1>,
      }
    ]
  },{
    path:"/",
    element:<Login/>,
    errorElement:<ErrorPage/>,
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
