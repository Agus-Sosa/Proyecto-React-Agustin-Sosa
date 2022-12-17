
import { FaOpencart } from "react-icons/fa";
import '../header.css'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

    const Cartwidget = () =>{
    const { CalcularProductoCarrito } = useContext(CartContext)


        return (
            // <div className="contenedor-carrito">
            //     <span>{CalcularProductoCarrito() || 0 }</span>
            //     <button className="boton-carrito"><FaOpencart/></button>
            // </div>
                <label className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <FaOpencart className="h-5 w-5"/>
                    <span className="badge badge-sm indicator-item">{CalcularProductoCarrito()}</span>
                    </div>
            </label>
            )
}

export default Cartwidget;