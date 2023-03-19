import React, { useEffect, useState, useContext } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'
import { Link, useNavigate  } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import UserContext from '../../contexts/userContext';




function Login() {
    let navigate = useNavigate();
    const [formulario, setFormulario] = useState({
        password:"",
        username: "",
      });
      const  [ values, handleInputChange, reset ] = useForm(formulario)
     const {autenticarUsuario, user}  = useContext(UserContext);

      useEffect(()=>{
          if(user.rol !== undefined){
            navigate('/protect');
          }
      },[user])
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(values.password.length > 7 && values.username.length > 0){
            await autenticarUsuario(values);
            
        }
        else{
            console.log("Rellene los campos")

        }
      
        
    }
 


    return (
        <div className="containerLogin">
            <Form className="formulario" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control 
                    type="text"
                    name="username" 
                    placeholder="username" 
                    onChange={handleInputChange}
                    />
                    <Form.Text className="text-muted">
                        Preferiblemente use el correo de la UCI
                     </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                    type="password"
                    name="password"
                     placeholder="*********" 
                     onChange={handleInputChange}
                     />
                </Form.Group>
                <Form.Group className="mb-3 formLink" controlId="formBasicCheckbox">
                    <Link to="/signUp">No tienes una cuenta ?</Link>
                </Form.Group>
                <Button variant="primary" type="submit" className="btnSubmit">
                    Enviar
               </Button>
            </Form>

        </div>
    );
}

export default Login;
