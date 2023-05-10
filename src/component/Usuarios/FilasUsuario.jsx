import { TfiWrite } from "react-icons/tfi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";

import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

import React, { useRef, useState, useEffect, useContext } from "react";
import "./usuarios.css"
import axios from "axios";
import UserContext from "../../contexts/userContext";
import { validarNombre, validarEmail, validarTexto, validarContrasena, validarApellidos } from "../../utils/validacion";

export default function FilasUsuario({ usuario, index, setActualizar, actualizar }) {
    const [rolesDb,setRolesDB] = useState([]);
    const {user, actualizarUsuario} = useContext(UserContext);
   useEffect(()=>{
       axios.get(`http://localhost:8080/rol`)
       .then(response=>{
           setRolesDB(response.data)
       })
   },[])
    const btnCancelar = useRef(null);
    const inputsRef = useRef(null);
    const inputsRefCorreo = useRef(null);
    const inputsRefusername = useRef(null);
    const inputsRefRol = useRef(null)
    const inputsRefApellidos = useRef(null)
    const sendRef = useRef(null);
    const [formData, setFormData] = useState({
        ...usuario,
    });

    const enableUpdateUsuario = () => {
        // btnCancelar.current.style.visibility = "visible"
        btnCancelar.current.style.visibility = "visible";
        sendRef.current.style.visibility = "visible";
        inputsRef.current.disabled = false;
        inputsRefApellidos.current.disabled = false;
        inputsRefCorreo.current.disabled = false;
        inputsRefusername.current.disabled = false;
        inputsRefRol.current.disabled = false;
        inputsRef.current.className = "active";
        inputsRefRol.current.className = "active";
        inputsRefCorreo.current.className = "active";
        inputsRefusername.current.className = "active";
        inputsRefApellidos.current.className = "active";
    };
    const cancelUpdate = () => {
        //desabilitar inputs y botones de cancelar y actualizar
        btnCancelar.current.style.visibility = "hidden";
        sendRef.current.style.visibility = "hidden";
        inputsRef.current.className = "none";
        inputsRefRol.current.className = "none";
        inputsRefCorreo.current.className = "none";
        inputsRefusername.current.className = "none";
        inputsRefApellidos.current.className = "none";
        inputsRef.current.disabled = true;
        inputsRefCorreo.current.disabled = true;
        inputsRefusername.current.disabled = true;
        inputsRefRol.current.disabled = true;
        inputsRefApellidos.current.disabled = true;
    
        
        //volver al nombre original
        setFormData({
            ...usuario,
        });
    };
    const deleteUsuario = () => {
        Swal.fire({
            title: "Estas seguro que desea eliminar el registro?",
            text: "Esta accion no se puede deshacer!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.put(`http://localhost:8080/user/deleteUserInactive/${formData.id_usuario}`)
                    .then((response) => {

                        if (response.error === 'Bad Request') {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: `${response.data.message}`,
                            });
                        } else {
                            Swal.fire("Eliminado!", `${response.data.username}`, "success");
                            setActualizar(!actualizar);

                        }

                    })
                    .catch((err) => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${err}`,
                        });
                    });
            }
        });
    };
    const handleInputChange = (event) => {
       
            
      
        if(event.target.name === "rol"){
            setFormData({
                ...formData, 
                [event.target.name]: JSON.parse(event.target.value) 
               });
               console.log(JSON.parse(event.target.value) )
        }else{
            setFormData({
                ...formData, 
                [event.target.name]: event.target.value 
               });
        }
        
        
        
    };
    const sendUpdate = () => {
         let validar = true;
         if(!validarNombre(formData.nombre)){
             inputsRef.current.className = 'invalid';
               validar = false
         }else{
            inputsRef.current.className = 'valid';
         }
             
         if(!validarEmail(formData.correo)){
            inputsRefCorreo.current.className = 'invalid';
            validar = false
         }
         else{
            inputsRefCorreo.current.className = 'valid';
         }
         if(!validarTexto(formData.username) || formData.username.length ===0){
            inputsRefusername.current.className = 'invalid';
            validar = false
         }else{
            inputsRefusername.current.className = 'valid';
         }
         if(!validarApellidos(formData.apellidos)){
            inputsRefApellidos.current.className = 'invalid';
            validar = false
         }else{
            inputsRefApellidos.current.className = 'valid';
         }

         if(validar){
            try {
                axios.put(`http://localhost:8080/user/updateUser/${usuario.id_usuario}`,formData)
                .then(response=>{
                    Swal.fire("Actualizado!", `${response.data.username}`, "success");
                    if(response.data.id_usuario === user.id_usuario){
                        actualizarUsuario(response.data)
                    console.log(response.data.username)
                    }
                    setFormData({
                        ...response.data
                    })
                })
                .catch(err=>{
                    Swal.fire("Opps!", `${err}`, "error");
                })
                
                setActualizar(!actualizar);
                  cancelUpdate()
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error}`,
                });
            }
         }
       
      
    };

    return (

        <tr>

            <td>{index + 1}</td>
            <td>
                
                <input
                    type="text"
                    value={formData.nombre}
                    className="offStyle"
                    disabled
                    ref={inputsRef}
                    name="nombre"
                    onChange={handleInputChange}
                />
            </td>
            <td>
                
                <input
                    type="text"
                    value={formData.apellidos}
                    className="offStyle"
                    disabled
                    ref={inputsRefApellidos}
                    name="apellidos"
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={formData.correo}
                    className="offStyle"
                    disabled
                    ref={inputsRefCorreo}
                    name="correo"
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={formData.username}
                    className="offStyle"
                    disabled
                    ref={inputsRefusername}
                    name="username"
                    onChange={handleInputChange}
                />

            </td>
            <td>
                <select 
                name="rol" id="pet-select" 
                ref={inputsRefRol} 
                onChange={handleInputChange}
                disabled
                className="offStyle"
                >
                    {rolesDb.map((rol, index) =>(
                        rol.id_rol === formData.rol.id_rol
                        ?
                            <option 
                            key={index} 
                            value={JSON.stringify(rol)} 
                            selected
                            >{rol.rolStatus}</option>
                       :
                            <option 
                            key={index} 
                            value={JSON.stringify(rol)} 
                            >{rol.rolStatus}</option> 
                        
                       
                    ))}
                   
                    
                </select>
            </td>
            <td>
                <Button
                    style={{ color: "black" }}
                    className="ms-3 me-3"
                    variant="outline-info"
                    onClick={enableUpdateUsuario}
                >
                    <TfiWrite />
                </Button>
                <Button
                    style={{ color: "black" }}
                    variant="outline-danger"
                    onClick={deleteUsuario}
                >
                    <RiDeleteBin5Line />
                </Button>
                <Button
                    ref={btnCancelar}
                    style={{ color: "black", visibility: "hidden" }}
                    variant="outline-info"
                    onClick={cancelUpdate}
                    className="ms-3 me-3"
                >
                    <MdOutlineCancel />
                </Button>

                <Button
                    style={{ color: "black", visibility: "hidden" }}
                    variant="outline-info"
                    onClick={sendUpdate}
                    className="ms-1 me-1"
                    ref={sendRef}
                >
                    <RiSendPlaneLine />
                </Button>
            </td>
        </tr>
    );
}
