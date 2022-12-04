
import { data } from "../utils/Productos";
import {GiShoppingBag} from 'react-icons/gi'
import './detail.css'
import { useState } from "react";
const ItemDetail = ({item}) =>{
    const [unidades, setUnidades] = useState()
    return (
        <>
        {
            item && item.imagen ?
            <div className="contenedor-detalle">
                <div className="contenedor-article">
                    <div data-aos="fade-right">
                        <article>
                            <img src={item.imagen} alt="" />
                        </article>
                    </div>
                </div>
            <div className="contenedor-item_info">
            <div data-aos="fade-left">

                <h4>{item.nombre}</h4>
                <p>{item.empresa}</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque commodi et quam. Commodi sed nulla doloribus nostrum neque necessitatibus doloremque ad temporibus maxime in eaque obcaecati, facilis inventore earum!</p>
                <p className="precio">${item.precio}</p>

                <hr />
                <div className="contenedor-botones">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Agregar al carrito</button>
                </div>
            </div>
            </div>
        </div>

        :   <div className="contenedor-carga">
            <progress className="progress w-56 carga" ></progress>
            
            </div>

            }
        </>
    )
}

export default ItemDetail;