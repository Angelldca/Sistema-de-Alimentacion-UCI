import React, { useEffect, useState } from 'react'

function Login() {
    const [state, setstate] = useState("nada")

 const sendData = async (e)=>{
    const  data = {
        username:"angelldca",
        password:"Al41677614**"
    }
  await fetch("https://soa-cas.uci.cu/cas/login?service=https%3A%2F%2Falimentacion.uci.cu%2Fsecurity%2Flogin_check",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
   .then(response => response.json())
   .then((response) =>{
       setstate(response)
   })
 }

    return (
        <div>
            <h1>Este es el Login</h1>
            <button onClick={sendData}>Login</button>
            <div>{state}</div>
        </div>
    )
}

export default Login
