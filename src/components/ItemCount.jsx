import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './detail.css'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'


const ItemCount = ({inicial = 1, stock= 0, onAdd}) => {
    const [count, setCount] = useState(0);
    
    
    useEffect(()=>{
        setCount(inicial) 
    
    }, [])

    const aumentar = () =>{
        count < stock 
        ? setCount(count + 1)
        : alert('No hay stock disponible')
    }

    const disminuir = () => {
        count > inicial+1 
        ? setCount(count -1)
        : console.log('esta en cero')
    }

    return (
        <>
    <div className='contenedor-contador'>
    <button onClick={aumentar}><GrFormAdd/></button>
    <span>{count}</span>
    <button onClick={disminuir}><GrFormSubtract/></button>
    </div>
        {
            stock && count  
            ? <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={()=> onAdd(count) }>Agregar al carrito</button>
            : <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" disabled>Agregar al Carrito</button>
        }
        </>

    );
}

export default ItemCount