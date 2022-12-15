import { useState } from "react";
import { createContext } from "react";

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
    }
    
    return (
        
        <CartContext.Provider value={{listaCarrito, agregarAlCarrito, eliminarProducto, }}>
            {children}
        </CartContext.Provider>
        

    )
}


export default CartContextProvider;
