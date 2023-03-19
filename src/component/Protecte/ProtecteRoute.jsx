import React, { useEffect, useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/userContext';

function ProtecteRoute({children}) {
    const navigate = useNavigate();
    const {user}  = useContext(UserContext);
    useEffect(()=>{
        if(user.rol !== undefined)
          if(user.rol.rolStatus ==="ADMIN_ROL"){
            navigate('/protect/admin');
          }else{
            navigate('/protect/user');
          }
          
        else{
            navigate('/');
        }
    },[])
    return (
        <>
           <Outlet/>
        </>
    )
}

export default ProtecteRoute
