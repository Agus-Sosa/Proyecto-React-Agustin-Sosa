import Item from "../components/Item";
import { data } from "../utils/Productos"
import AOS from 'aos';
import {FiChevronRight} from 'react-icons/fi'
import Itemlist from "../components/Itemlist";
import '../components/home.css'
import { fetchData } from "../utils/fetch-data";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Itemlistcontainer = () =>{
    const[datos, setDatos] = useState([]);
    const {categoriaId} = useParams();

    useEffect(() =>{
        if(categoriaId) {

            fetchData(2000, data.filter(item => item.categoria === parseInt(categoriaId)))
            .then(response => setDatos(response))
            .catch(error => console.log(error))
        } else {
            fetchData(2000, data)
            .then(response => setDatos(response))
            .catch(error => console.log(error))
        }
    }, [categoriaId])
    return (
        <>
        <div className="portada-imagen">
        <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
            <div className='contenedor-imagen'>
            <div className='texto-portada'>
            <p className="p-portada1">Nuevo</p>
            <h3> Iphone 14 Pro Max</h3>
            <p className="p-portada2">Consulta por su disponibilidad</p>
            <a href="">Mas Informacion <FiChevronRight/></a>
            {/* <button>Add to cart</button> */}
            </div>
            </div>
            
            
        </div>
        </div> 
        <div className='titulo-productos'>
            <h1>Productos Destacados</h1>
        </div> 
        <div className="contenedor-card">
            
        <Itemlist props={datos}/>
        </div>

        {/* {

        
        
    data.map(item =>(
        <Item 
        
        key={item.id}
        id={item.id}
        imagen={item.imagen}
        nombre={item.nombre}
        empresa={item.empresa}
        precio={item.precio}
        />
        ))
    } */}
        </>
    )
}
AOS.init();



export default Itemlistcontainer;