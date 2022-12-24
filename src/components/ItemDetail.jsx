

import './detail.css'
import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { AiOutlineRight } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineLeft } from 'react-icons/ai'
import { ImFacebook, ImTwitter, ImWhatsapp, ImInstagram } from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'


const ItemDetail = ({item}) =>{
    const [itemCount, setItemCount] = useState(0)
    const {agregarAlCarrito} = useContext(CartContext)

    const onAdd = (qty) => {
        toast('Se Agregaron ' + qty + ' unidades al carrito', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        setItemCount(qty);
        agregarAlCarrito(item, qty);
    }

    return (
        <>
        <div className='contenedor-nav-detail'>
            <Link to={'/'}><span>Inicio</span></Link> / <Link to={`/categoria/${item.empresa}`}> <span>{item.empresa}</span></Link> / <span>{item.nombre}</span>
        </div>
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
                <p className="precio">US${item.precio}</p>
                <hr />
                <p className="parrafo-detalles">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam eaque commodi et quam. 
                Commodi sed nulla doloribus nostrum neque necessitatibus doloremque ad temporibus maxime in eaque obcaecati, 
                facilis inventore earum!</p>

                    <p className='stock-info'>Stock {item.stock}</p>
                <div className="contenedor-botones">
                    {
                        
                        itemCount === 0
                        ? <ItemCount stock={item.stock} inicial={itemCount} onAdd={onAdd} />
                        :<>
                        <Link to='/carrito'><button className='ir-a-carrito btn'>Ir a carrito<AiOutlineRight/></button></Link>
                        
                        </>
        
                    }
                        {/* <ItemCount stock={item.stock} inicial={itemCount} onAdd={onAdd} />                         */}
                    
                </div>
                <hr />
                <div className='empresa-info'>
                <p>Empresa:<Link to={`/categoria/${item.empresa}`}> <span>{item.empresa}</span></Link></p>
                </div>
                <div className='contenedor-compartir'>
                    <h5>Compartir</h5>
                    <div className='botones-compartir'>
                    <a href=""><ImFacebook/></a>
                    <a href=""><ImInstagram/></a>
                    <a href=""><ImTwitter/></a>
                    <a href=""><ImWhatsapp/></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        

        :   <div className="contenedor-carga">
            <progress className="progress w-56 carga" ></progress>
            
            </div>

            }
        <ToastContainer/>
        </>
    )
}

export default ItemDetail;