import Item from "../components/Item";
import { data } from "../utils/Productos"
import AOS from 'aos';
import Itemlist from "../components/Itemlist";
import '../components/home.css'
import { fetchData } from "../utils/fetch-data";
import { useEffect, useState } from "react";

const Itemlistcontainer = () =>{
    const[datos, setDatos] = useState([]);


    useEffect(() =>{
        fetchData(2000, data)
        .then(response => setDatos(response))
        .catch(error => console.log(error))
    })
    return (
        <>
        <div className="portada-imagen">
        <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
            <div className='contenedor-imagen'>
            <div className='texto-portada'>

            <h3> Iphone 14 Pro Max</h3>
            <p>$1,990.00</p>
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