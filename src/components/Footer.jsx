
import {FaTwitter} from "react-icons/fa"
import {SiFacebookgaming} from 'react-icons/si'
import {CgInstagram} from 'react-icons/cg'
import './footer.css'
const Footer = () =>{

    return (
        <>
        <div className="contenedor-footer">
            <h4>Contactos</h4>
        <div className="contenedor-icons">
            <span href=""><FaTwitter/></span>
            <span href=""><SiFacebookgaming/></span>
            <span><CgInstagram /></span>
        </div>
        <div className="contenedor-copyright">
        <span>Avisos legales</span>
        <span>Politicas de Privacidad</span>
        </div>
        </div>
        </>
    )
}

export default Footer;