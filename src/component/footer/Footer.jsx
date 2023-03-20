
import '../footer/footer.css'
import { BsLinkedin, BsTwitter, BsFacebook, BsMailbox2 } from 'react-icons/bs'
import { ImMail } from "react-icons/im"
import InfoFooter from './InfoFooter'

const pPriv = `En nuestro sistema de reserva, 
la privacidad y seguridad de tus datos personales son de suma importancia para nosotros. 
Por lo tanto, hemos establecido políticas y medidas rigurosas para proteger la información 
personal que recopilamos durante el proceso de reserva.

Durante el proceso de crear cuenta, se te solicitará proporcionar información personal, 
como tu nombre, 
dirección de correo electrónico.
 Estos datos son necesarios para completar la reserva y garantizar que tengas una experiencia segura y satisfactoria.
La información personal que recopilamos durante el proceso de reserva se utilizará exclusivamente para completar la reserva y garantizar que se cumplan tus necesidades de viaje. No compartiremos tus datos personales con terceros 
a menos que sea necesario para completar la reserva o cumplir con las leyes y regulaciones aplicables.`

const infoSistema =`Nuestro sistema es una herramienta en línea que te permite reservar y gestionar tus viajes de manera fácil y eficiente. Desde la plataforma, puedes ver y reservar los menus planificados. Además, nuestro sistema cuenta con medidas de seguridad y privacidad para proteger tus datos personales y financieros.`
const tm =`Nuestros términos de servicio establecen las condiciones de uso de nuestro sistema de reserva. Al utilizar nuestra plataforma, aceptas cumplir con estas condiciones. Nos reservamos el derecho de modificar estos términos en cualquier momento y te notificaremos si hay cambios importantes. 
Si tienes alguna pregunta o inquietud sobre nuestros términos de servicio, no dudes en contactarnos.`
function Footer() {
  return (
    <>
      <div className="footer">
        <hr />
        <div className="enlaces">
          <a style={{ color: "white" }} href="https://www.linkedin.com/school/15097469" target="_blank">
            <BsLinkedin className="enlacesicon" />
          </a>
          <a style={{ color: "white" }} href="https://www.facebook.com/universidad.uci" target="_blank">
            <BsFacebook className="enlacesicon" />
          </a>
          <a style={{ color: "white" }} href="https://twitter.com/universidad_uci" target="_blank">
            <BsTwitter className="enlacesicon" />
          </a>
          <a style={{ color: "white" }} href="https://correo.uci.cu/" target="_blank">
            <ImMail className="enlacesicon"/>
          </a>
          
        </div>
        <div className="copy">
          <p>&copy; 2023 CIDI.com, INC.</p>
          <p>Universidad de las Ciencias Informáticas, UCI</p>
        </div>

        <div className="informacion">
          <div>
           <InfoFooter encabezado="Politica de Privacidad" texto ={pPriv}/>
          </div>
          <div>
            <InfoFooter encabezado="Información sobre el sistema" texto={infoSistema}/>
          </div>
          <InfoFooter encabezado="Términos de servicio" texto={tm}/>
        </div>
      </div>
    </>
  );
}

export default Footer;