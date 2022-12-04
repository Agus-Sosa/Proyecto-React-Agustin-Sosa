import AOS from 'aos';
import 'aos/dist/aos.css'; //
import './home.css'
import { Link } from 'react-router-dom';

const Item = ({id, imagen, nombre, empresa, precio, categoria}) => {
    return (
        <>

            <div className='card-prod'>
            <div data-aos="zoom-in">

            <article className='imagen-prod'>
                <img src={imagen} alt="Producto" />
            </article>
            <div className='informacion-prod'>
                <p className='nombre-prod'>{nombre}</p>
                <p className='nombre-empresa'>{empresa}</p>
                <p className='precio-prod'>${precio}</p>
            </div>
            <div>
            <Link to={`/item/${id}`}><button className="btn">Ver producto</button></Link>
            </div>
            </div>

            {/* <button className='boton-prod'>Ver Producto</button> */}
            </div>

            
    
        </>
    )
}
AOS.init();


export default Item;

