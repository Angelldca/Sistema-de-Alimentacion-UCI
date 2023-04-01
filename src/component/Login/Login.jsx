import React, { useEffect, useState, useContext, useRef } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import UserContext from '../../contexts/userContext';
import Swal from 'sweetalert2'

function focusFunc(){
    let parent= this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent= this.parentNode.parentNode;
    if(this.value==""){
        parent.classList.remove('focus'); 
    }
    
}

function Login() {
    let navigate = useNavigate();
    const [formulario, setFormulario] = useState({
        password: "",
        username: "",
    });
    const [values, handleInputChange, reset] = useForm(formulario)
    const { autenticarUsuario, user } = useContext(UserContext);

   const inputRefNombre = useRef(null);
   const inputRefPass = useRef(null);
   
   useEffect(()=>{
    inputRefNombre.current.addEventListener('focus', focusFunc);
    inputRefNombre.current.addEventListener('blur', blurFunc);
    inputRefPass.current.addEventListener('focus', focusFunc);
    inputRefPass.current.addEventListener('blur', blurFunc);
   },[])
 

    useEffect(() => {
        if (user.rol !== undefined) {
            navigate('/protect');
        }
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault();
         console.log(values)
        if (values.password.length > 7 && values.username.length > 0) {
            await autenticarUsuario(values);

        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No debe dejar campos vacios!',
                
            })

        }


    }

    return (
        <div className="containerLogin">
            <div>
                <img className="wave" src="../../img/mujer.png" />
            </div>

            <div className="login-container">
                <form action="index.html"  onSubmit={handleSubmit}>
                    <img className="avatar" src="../../img/avatar.png" />
                    <h2>Bienvenido</h2>
                    <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div>
                            <h5>Nombre de Usuario</h5>
                            <input 
                            name="username"
                            className="input" 
                            type="text" 
                            ref={inputRefNombre}
                            onChange={handleInputChange}/>

                        </div>

                    </div>

                    <div className="input-div two">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div>
                            <h5>Contraseña</h5>
                            <input 
                            name="password"
                            className="input" 
                            type="password" 
                            ref={inputRefPass}
                            onChange={handleInputChange}
                            />

                        </div>

                    </div>
                    <Link to="/signUp">No tienes cuenta?</Link>
                    <input type="submit" className="btnLogin" value="login" />
                </form>

            </div>
        </div>
    )
}

export default Login;
