import {useContext } from 'react';
import './cart.css'
import { CartContext } from './context/CartContext';
import {AiOutlineRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai'
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from 'firebase/firestore';
import {db} from '../utils/firebaseConfig'

const Cart = () => {
    const { listaCarrito } = useContext(CartContext);
    const { eliminarProducto } = useContext(CartContext)
    const {eliminarCarrito} = useContext(CartContext)
    const {calcularPrecioTotal} = useContext(CartContext)
    const {calcularImpuestos} = useContext(CartContext)
    const { precioTotal } = useContext(CartContext)
    
    
    const botonAgregarOrden = () => {
        const orden = {
        buyer: {
            name: 'Agustin Sosa',
            phone: '341-1111-111',
            email: 'agus31@gmail.com'
            },
            dato: serverTimestamp() , 
            item: listaCarrito.map(item => ({
                id: item.id,
                title: item.nombre ,
                price: item.precio,
                qty: item.qty
            })),
            
            total: precioTotal(),
        }
        console.log(orden)
        const agregarOrdenFireStore = async() =>{
            const nuevaOrdenRef = doc(collection(db, 'orden'))
            await setDoc(nuevaOrdenRef, orden);
            return nuevaOrdenRef
        }
        agregarOrdenFireStore()
        .then(resultado => {
            alert('orden' + resultado.id)
            listaCarrito.forEach(async(item) => {
                const itemRef = doc(db, "Productos", item.id);
                    await updateDoc(itemRef, {

                    stock: increment(-item.qty)
                });
            });
            eliminarCarrito()
        })
        .catch(error => console.log(error))


        
    }
    
    
    return (
        <>
        <h1>Carrito</h1> 
        <div className='contenedor-cart'>
            <div className='contenedor-cart-productos'>

                <>
                {
                    
                    listaCarrito.length == 0 
                    ? <div className='hidden'>
                            <Link to={'/'}><span><AiOutlineLeft/>Volver A inicio</span></Link>
                            <button className='btn-small'>Elminar Carrito</button>
                        </div>
                        : <div className='contenedor-botones-carrito '>
                        <Link to={'/'}><span><AiOutlineLeft/>Volver A inicio</span></Link> | <p>Productos</p> | <button onClick={() => {eliminarCarrito()}}>Eliminar Carrito</button>
                    </div>
                }
                </>
                <div className='contenedor-cart-productos-2'>

        {
            listaCarrito.length === 0
            ? <div className='contenedor-carrito-vacio'>
                <div className='carrito-vacio'>
                    <img src="https://enigma.uy/img/mini-empty-cart.png" alt="" />
                <h3>Tu Carrito Esta vacio</h3>
                <Link to={'/'}>
                    <button className='btn'>Ir al inicio <AiOutlineRight/></button>
                </Link>
                </div>
            </div>
            : listaCarrito.map(item => 
                <>
                <div key={item.id} className='contenedor-producto'>
                    <article>
                        <img src={item.imagen} alt="" />
                    </article>
                    <div className='contenedor-detalles'>
                    <h2>{item.nombre}</h2>
                    <span>{item.empresa}</span>
                    <p>Cantidad: {item.qty}</p>
                    </div>
                <div className='contenedor-detalle-precio'>
                    <p>${item.precio}</p>
                    <button class="btn btn-sm" onClick={() => eliminarProducto(item.id)}>Eliminar</button>
                </div>
                </div>
                </>
            )
        }
        </div>
            </div>
            {
                listaCarrito.length == 0
                ?   <div className='hidden'>
                        <h3>Resumen</h3>
                    </div>
                :   <div className='contenedor-caja-compra'>
                        <h3>Resumen</h3>
                            <div className='contenedor-precios-resumen'>
                                <div className='contenedor-subtotal'>
                                    <span>Subtotal</span> 
                                    <span>US${calcularPrecioTotal() || 0}</span>
                                </div>
                                <div className='contenedor-impuestos'>
                                    <span>Impuestos</span>
                                    <span>US${calcularImpuestos() || 0}</span>
                                </div>
                                <div className='contenedor-costo-envio'>
                                    <span>Envio</span>
                                    <span>US$5</span>
                                </div>
                                </div>
                            <div className='contenedor-precio-total'>
                                <span>Total</span>
                                <span>US${precioTotal() || 0}</span>
                        </div>
                        <button className='btn boton-comprar' onClick={botonAgregarOrden}>Comprar</button>
                    </div>
            }
            </div>
        </>
    )
}

export default Cart;