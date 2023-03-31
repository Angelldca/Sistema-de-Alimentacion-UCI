import React, { useState, useContext, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './signup.css'
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import UserContext from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import { validarContrasena, validarNombre, validarTexto } from '../../utils/validacion';



function SignUp() {
    const [validated, setValidated] = useState(false);
    const refPass = useRef(null)
    const [image, setImage] = useState(null);
    const [formData, setFormdata] = useState(null);

    const navigate =  useNavigate();
     const {user,createUser}  = useContext(UserContext);
    
     useEffect(()=>{
         if(user.rol !== undefined)
            navigate('/protect');
     },[user])

    const [formulario, setFormulario] = useState({
        nombre: "",
        apellidos: "",
        ci:"",
        edificio: "",
        apto: "",
        password:"",
        categoria: "",
        correo: "",
        username: "",
        solapin: "",
        rol:{
            id_rol:2,
            rolStatus:"USER_ROL"
        },
        imagen:null
      });
 
     const  [ values, handleInputChange, reset ] = useForm(formulario)
     
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        console.log(image)
      };

      const prueba = async ()=>{
        const fd = new FormData();
        fd.append('file', image);
       // fd.append('user', JSON.stringify(formulario));
         setFormdata(fd);
      }
    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        
       
       event.preventDefault();
      
       if(! validarContrasena(values.password)){
        
         alert("La contraseña debe ser minimo de 8 caractéres, contener al menos una letra y un digito")
       }
       else if(!validarNombre(values.nombre)){
        alert("Los nombres deben comenzar con mayusculas y contener solo letras")
       }else if(!validarTexto(values.username) || !validarTexto(values.categoria) || !validarTexto(values.apellidos)){
        alert("Los campos username, categoria y apellidos deben contener solo letras")
       }
       else{

           if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
          }else{
             await createUser(values)
             
          }
          setValidated(true);
       }
       
    
    };

    return (
        <div className="containerSignup">

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="nombre"
                            placeholder="nombre"
                            onChange={handleInputChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="apellidos"
                            
                            placeholder="apellido"
                            onChange={handleInputChange}

                        />
                        <Form.Control.Feedback>Listo!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor intruduce un username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>correo uci</Form.Label>
                        <Form.Control 
                        type="email"
                        name="correo" 
                        placeholder="correo" 
                        required 
                        onChange={handleInputChange}/>
                        <Form.Control.Feedback type="invalid">
                        Por favor intruduce un email.
                         </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password"
                        name="password" 
                        placeholder="password" 
                        ref={refPass}
                        required 
                        onChange={handleInputChange}/>
                        <Form.Control.Feedback name="passErr" type="invalid">
                            La contraseña debe poseer al menos 8 caractéres.
                         </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control 
                        type="text"
                        name="categoria" 
                        placeholder="Categoria" 
                        required 
                        onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                        Por favor intruduce una categoria.
                         </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom06">
                        <Form.Label>Apartamento</Form.Label>
                        <Form.Control 
                        type="number"
                        name="apto" 
                        placeholder="Apartamento" 
                        required 
                        onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                        Por favor intruduce un apartamento.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom07">
                        <Form.Label>Edificio</Form.Label>
                        <Form.Control 
                        type="number"
                        name="edificio" 
                        placeholder="edificio" 
                        required 
                        onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                        Por favor intruduce un edificio.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom08">
                        <Form.Label>Solapin</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="solapin"
                        placeholder="Solapin" 
                        onChange={handleInputChange}
                        required />
                        <Form.Control.Feedback type="invalid">
                        Por favor intruduce el solapin
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom09">
                        <Form.Label>CI</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="ci"
                        placeholder="CI" 
                        onChange={handleInputChange}
                        required />
                        <Form.Control.Feedback type="invalid">
                        Por favor intruduce el carnet de ID.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="position-relative mb-3">
                        <Form.Label>Selecciona una foto de perfil</Form.Label>
                        <Form.Control
                            type="file"
                            name="file"
                            onChange={handleImageChange}
                            //isInvalid={!!errors.file}
                            //onChange={handleChange}
                        />
                        
                    </Form.Group>
                </Row>
               
                <Button type="submit">Enviar</Button>
            </Form>
        </div>
    );
}

export default SignUp;