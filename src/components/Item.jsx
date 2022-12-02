import AOS from 'aos';
import 'aos/dist/aos.css'; //
import './home.css'


const Item = ({id, imagen, nombre, empresa, precio, categoria}) => {
    return (
        <>
            <div className='card-prod'>
            <article className='imagen-prod'>
                <img src={imagen} alt="Producto" />
            </article>
            <div className='informacion-prod'>
                <p className='nombre-prod'>{nombre}</p>
                <p className='nombre-empresa'>{empresa}</p>
                <p className='precio-prod'>${precio}</p>
            </div>
            <button className="btn">Ver producto</button>

            {/* <button className='boton-prod'>Ver Producto</button> */}
            </div>
    
        </>
    )
}
AOS.init();


export default Item;

