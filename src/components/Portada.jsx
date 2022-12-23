import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
const Portada = () => {
    return (
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
            {/* <div className='contenedor-cuarta-portada'>
                <div>
                    <img src="https://www.apple.com/v/airpods-2nd-generation/e/images/meta/og__bz8g5g9sbyoi_overview.png?202212201350" alt="" />
                </div>
                <div className='info-portada-4'>
                <p>Airpods 2</p>
                <span>Mas informacion</span>
                </div>
            </div> */}
        </section>
    )
}

export default Portada