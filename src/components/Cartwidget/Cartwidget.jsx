
import { FaOpencart } from "react-icons/fa";
import '../header.css'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

    const Cartwidget = () =>{
    const { CalcularProductoCarrito } = useContext(CartContext)


        return (
            <Link to='/carrito'>
            <div className="contenedor-cart-widget">
                <label className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <FaOpencart className="h-5 w-5"/>
                    <span className="badge badge-sm indicator-item">{CalcularProductoCarrito()}</span>
                    </div>
            </label>
            </div>
            </Link>
            )
}

export default Cartwidget;