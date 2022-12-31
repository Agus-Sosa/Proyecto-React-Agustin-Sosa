import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './detail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'


const ItemCount = ({inicial = 1, stock= 0, onAdd}) => {
    const [count, setCount] = useState(0);
    
    
    useEffect(()=>{
        setCount(inicial) 
    
    }, [])

    const aumentar = () =>{
        count < stock 
        ? setCount(count + 1)
        : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay stock',
            })
    }

    const disminuir = () => {
        count > inicial+1 
        ? setCount(count -1)
        :  toast('Se Agregaron ' + qty + ' unidades al carrito', {
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

    return (
        <>
        <section className='contenedor-count'>
    <div className='contenedor-contador'>
    <button onClick={aumentar}><GrFormAdd/></button>
    <span>{count}</span>
    <button onClick={disminuir}><GrFormSubtract/></button>
    </div>
    </section>
        {
            stock && count  
            ? <button className="btn " onClick={()=> onAdd(count) }>Agregar al carrito</button>
            : <button className="btn  " disabled>Agregar al Carrito</button>
        }

<ToastContainer/>
        </>
    
    );
}

export default ItemCount