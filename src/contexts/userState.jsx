import React,{ useReducer } from 'react'

import userReducer from './userReducer'
import UserContext from './userContext'
import axios from 'axios'
import  { createUserDb, authUser, updateHis } from './types'; 


function UserState(props) {
    const initialState = {
        user:{},
        historial:['/']
    }
   
    const actualizaHistorial = (path)=>{
        dispatch({
            types: updateHis,
            payload: path
        })
    }
    const createUser = async (values)=>{

        await axios.post('http://localhost:8080/user/createUser',values,{ 
            headers: { 'Content-Type': 'application/json' }
          })
       .then(response => {
        //setData(response.data);
       //     console.log(data)
       dispatch({
           types: createUserDb,
           payload: response.data
       })
    })
       .catch(error => {
     console.log(error);
    });
    }
    const autenticarUsuario = async (values)=>{
        await axios.post('http://localhost:8080/user/autenticate',values,{ 
            headers: { 'Content-Type': 'application/json' }
          })
       .then(response => {
        //setData(response.data);
       
       dispatch({
           types: authUser,
           payload: response.data
       })
    })
       .catch(error => {
     console.log(error);
    });
     
    }
    const logOutUser = async (values)=>{
       dispatch({
           types: createUserDb,
           payload: {}
       })
   
    }


    const [state, dispatch] = useReducer(userReducer,initialState)

    return (
        <UserContext.Provider value={{
            user: state.user,
            historial: state.historial,
            createUser,
            autenticarUsuario,
            actualizaHistorial,
            logOutUser
          }}>
          {props.children}
        </UserContext.Provider>
    )
}

export default UserState
