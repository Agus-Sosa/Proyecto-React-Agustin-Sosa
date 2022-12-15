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
        Swal.fire({
            title: '¿Estas Seguro?',
            text: "No podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, Eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'Su Carrito fue eliminado con exito.',
                    'success'
                )
                setListaCarrito([])
                }
            })
    }
    return (
        <>
        <CartContext.Provider value={{listaCarrito, agregarAlCarrito, eliminarProducto, eliminarCarrito}}>
            {children}
        </CartContext.Provider>
        

        <ToastContainer/>
        </>
    )
}


export default CartContextProvider;
