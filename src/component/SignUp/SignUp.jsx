import React, { useState, useContext, useEffect, useRef } from 'react';

import './signup.css'
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import UserContext from '../../contexts/userContext';
import { useNavigate, Link } from 'react-router-dom';
import { validarContrasena, validarNombre, validarTexto, validarApellidos, validarEmail } from '../../utils/validacion';



function SignUp() {
    const [validated, setValidated] = useState(false);
    const refPass = useRef(null)
    const refUsername = useRef(null)
    const refNombre = useRef(null)
    const refApellido = useRef(null)
    const refCorreo = useRef(null)
    const refCi = useRef(null)
    const [image, setImage] = useState(null);


    const navigate = useNavigate();
    const { user, createUser } = useContext(UserContext);

    useEffect(() => {
        if (user.rol !== undefined)
            navigate('/protect');
    }, [user])

    const [formulario, setFormulario] = useState({
        nombre: "",
        apellidos: "",
        ci: "",
        edificio: "",
        apto: "",
        password: "",
        categoria: "Estudiante",
        correo: "",
        username: "",
        solapin: "E2343",
        estado:"ACTIVO",
        rol: {
            id_rol: 2,
            rolStatus: "USER_ROL"
        },
        imagen: null
    });

    const [values, handleInputChange, reset] = useForm(formulario)

  


    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        

        event.preventDefault();
        let validar = true;
        if(!validarNombre(values.nombre)){
            refNombre.current.className = 'invalid';
              validar = false
        }else{
            refNombre.current.className = 'controls';
        }
            
        if(!validarEmail(values.correo)){
           refCorreo.current.className = 'invalid';
           validar = false
        }
        else{
            refCorreo.current.className = 'controls';
        }
        if(!validarTexto(values.username)|| values.username.length === 0){
           refUsername.current.className = 'invalid';
           validar = false
        }else{
           refUsername.current.className = 'controls';
        }
        if(!validarApellidos(values.apellidos)){
           refApellido.current.className = 'invalid';
           validar = false
        }else{
            refApellido.current.className = 'controls';
        }
        if(!validarContrasena(values.password)){
            refPass.current.className = 'invalid';
            validar = false
         }else{
            refPass.current.className = 'controls';
         }
         if(!(values.ci.length === 11) ){
            refCi.current.className = 'invalid';
            validar = false
         }else{
            refCi.current.className = 'controls';
         }
        if(!validar){
            console.log("dasdasdas")
        }
        else {
                await createUser(values)
                navigate('/protect');
           }


    };

    return (
        <div className="containerSign">
            <div>
                <img className="wave" src="./img/q.png" alt="foto" />
            </div>
            <form className="form-register" onSubmit={handleSubmit}>
                <h4>Registre su Usuario</h4>
                <input
                    className="controls"
                    type="text"
                    name="nombre" 
                    id="nombres"
                     placeholder="Ingrese su Nombre"
                     onChange={handleInputChange}
                     ref={refNombre}
                />
                <input
                    className="controls"
                    type="text"
                    name="apellidos"
                    id="apellidos"
                    placeholder="Ingrese sus Apellidos"
                    onChange={handleInputChange}
                    ref={refApellido}
                />
                <input
                    className="controls"
                    type="text"
                    name="username"
                    id="usuario"
                    placeholder="Ingrese un Usuario"
                    onChange={handleInputChange}
                    ref={refUsername}
                />

                <input
                    className="controls"
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="Ingrese su Correo"
                    onChange={handleInputChange}
                    ref={refCorreo}
                />
                <input
                    className="controls"
                    type="number"
                    name="ci"
                    id="carnet"
                    placeholder="Ingrese su CI"
                    onChange={handleInputChange}
                    ref={refCi}
                />
                <input
                    className="controls"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ingrese una Contraseña"
                    onChange={handleInputChange}
                    ref={refPass}
                />

                <input
                    className="botons"
                    type="submit"
                    value="Registrar" />
                <div>

                    <Link to="/">¿Ya tengo cuenta?</Link>
                </div>
            </form>
        </div>
    );
}


export default SignUp;