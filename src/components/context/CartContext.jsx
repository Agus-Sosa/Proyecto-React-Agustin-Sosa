import { useState } from "react";
import { createContext } from "react";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [listaCarrito, setListaCarrito] = useState([]);

    const agregarAlCarrito = (item, qty) =>{
    let noexiste = listaCarrito.find(prod => prod.id === item.id)

    if(noexiste === undefined) {

        setListaCarrito([
            ...listaCarrito,
            {
                id: item.id,
                nombre: item.nombre,
                imagen: item.imagen,
                precio: item.precio,
                qty: qty
            }
        ])
        
    } else {
        noexiste.qty += qty
        setListaCarrito([...listaCarrito])
    }
            
}

    const eliminarProducto = (id) => {
        let eliminar = listaCarrito.filter(prod => prod.id !== id )
        setListaCarrito(eliminar)
        toast( 'Se Elimino el producto', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    const eliminarCarrito = () => {
                setListaCarrito([])
                
            
    }

    const CalcularProductoCarrito = () => {
        let productos = listaCarrito.map(item => item.qty)
        return productos.reduce(((acumulador, itemActual) => acumulador + itemActual), 0 );
    }

    const calcularPrecioTotal = () => {
        return Math.trunc(listaCarrito.reduce((acc, item) => acc + (item.precio * item.qty), 0))
    }

    const calcularImpuestos = () => {
     return Math.trunc( calcularPrecioTotal() * 0.64)
    }

    const precioTotal = () => {
        return (calcularPrecioTotal() + calcularImpuestos()) + 5;
    }

    return (
        <>
        <CartContext.Provider value={{listaCarrito, agregarAlCarrito, eliminarProducto, eliminarCarrito, CalcularProductoCarrito, calcularPrecioTotal, calcularImpuestos, precioTotal}}>
            {children}
        </CartContext.Provider>
        

        <ToastContainer/>
        </>
    )
}


export default CartContextProvider;
