import {useContext } from 'react';
import './cart.css'
import { CartContext } from './context/CartContext';
import {AiOutlineRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai'
import Swal from 'sweetalert2'
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from 'firebase/firestore';
import {db} from '../utils/firebaseConfig'
import { useState } from 'react';

const Cart = () => {
    const { listaCarrito } = useContext(CartContext);
    const { eliminarProducto } = useContext(CartContext)
    const {eliminarCarrito} = useContext(CartContext)
    const {calcularSubTotal} = useContext(CartContext)
    const {calcularImpuestos} = useContext(CartContext)
    const { precioTotal } = useContext(CartContext)
    const [codigo, setCodigo] = useState()
    

    const CodigoDescuento = (valorInput) =>{
        if(valorInput  === 'Navidad') {
         let descuento =  precioTotal() * 0.50; 
            setCodigo(descuento)
        }else {

        }
    }

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
        const agregarOrdenFireStore = async() =>{
            const nuevaOrdenRef = doc(collection(db, 'orden'))
            await setDoc(nuevaOrdenRef, orden);
            return nuevaOrdenRef
        }
        agregarOrdenFireStore()
        .then(resultado => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Compra Realizada con exito',
                text: ` Orden de compra  ${resultado.id }`,
                showConfirmButton: false,
                timer: 1500
            })
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
        
        {
            listaCarrito.length > 0 
            ? <div className='contenedor-input-codigos'>
                <form 
                onSubmit={ev =>{
                    ev.preventDefault();
                    const ValorCodigo = ev.target.descuento.value
                    CodigoDescuento(ValorCodigo)
                }}
                >
                    <div className='cartel-descuento'>
                        <label>Coloque "Navidad" para un 50%</label>
                    </div>
                    <input type="text" autoFocus='off' autoComplete='off' name='descuento' placeholder='cupon de descuento' className='input input-bordered w-full max-w-xs'  />
                    <button  type={'submit'}>Aplicar</button>
                    </form>
            </div>
            : <div className='contenedor-input-codigos hidden'></div>
        }
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
                                    <span>US${calcularSubTotal() || 0}</span>
                                </div>
                                <div className='contenedor-impuestos'>
                                    <span>Impuestos (64%)</span>
                                    <span>US${calcularImpuestos() || 0}</span>
                                </div>
                                <div className='contenedor-costo-envio'>
                                    <span>Envio</span>
                                    <span>US$5</span>
                                </div>
                                <div className='contenedor-descuento'>
                                <span>Descuento</span>
                                <span id='descuento'></span>
                                </div>
                                </div>
                            <div className='contenedor-precio-total'>
                                <span>Total</span>
                                <span>US${codigo || precioTotal()}</span>
                        </div>
                        <button className='btn boton-comprar' onClick={botonAgregarOrden}>Comprar</button>
                    </div>
            }
            </div>
        </>
    )
}

// export default Cart;
export default Cart;