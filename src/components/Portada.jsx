import React from 'react'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
const Portada = () => {
    return (
        <>
        
        <section className='contenedor-portada-1 flex-wrap'>
            <div className='contenedor-primera-portada '>
                <div>
                    <img src="https://www.apple.com/v/iphone-14-pro/b/images/overview/hero/hero_iphone_14_pro__kzr001ge0262_large.jpg" alt="" />
                </div>
                <div className='info-portada-1'>
                    <p>Iphone 14 Pro Max</p>
                    <Link to={'/item/9aYxlDCXkSuTibn9FXMy'}><button>Comprar</button></Link>
                </div>

            </div>
            <div className='contenedor-segunda-portada'>
                <div>
                    <img src="https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-sm.png" alt="" />
                </div>
                <div className='info-portada-2'>
                <p>Samsung S22 Ultra </p>
                <Link to={'/item/0NPMymmGH7NGrFYbsc5l'}><button>Comprar</button></Link>
                </div>

            </div>
            <div className='contenedor-tercera-portada'>
                <div>
                    <img src="https://xiaomiplanet.sk/wp-content/uploads/2021/10/redmi-note-11-pro-a-note-11-pro-predstavene-cover.jpg" alt="" />
                </div>
                <div className='info-portada-3'>
                <p>Xioami 11T Pro</p>
                <Link to={'/item/8w8FHfE9XYdIsiLrhwr5'}><button>Comprar</button></Link>
                </div>
            </div>
        </section>
        <section className='contenedor-servicios'>
            <div>
            <img src="https://img.icons8.com/pastel-glyph/512/fast-cart.png" alt="" />
            <p>Entrega dentro de las 48hs</p>
            </div>
            <div>
            <img src="https://static.thenounproject.com/png/284886-200.png" alt="" />
            <p>Seguimiento en linea</p>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/81/81117.png" alt="" />
                <p>Soporte las 24hs</p>
            </div>
        </section>
        <div className='titulo-productos'>
            <h1>Productos Destacados</h1>
        </div> 
            </>
    )
}

export default Portada