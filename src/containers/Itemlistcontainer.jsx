import Item from "../components/Item";
import { data } from "../utils/Productos"
import AOS from 'aos';
import {FiChevronRight} from 'react-icons/fi'
import Itemlist from "../components/Itemlist";
import '../components/home.css'
import { fetchData } from "../utils/fetch-data";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
        {/* <div className="portada-imagen">
        <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
                <div className='contenedor-imagen'>
                    <div className='texto-portada'>
                        <p className="p-portada1">Nuevo</p>
                        <h3> Iphone 14 Pro Max</h3>
                        <p className="p-portada2">Consulta por su disponibilidad</p>
                        <Link to={'item/1'}><a href="">Mas Informacion <FiChevronRight/></a></Link>
                    </div>
                </div>    
            </div>
        </div>  */}
        <div className="contenedor-carousel">

            <div className="carousel w-full contenedor-carousel2">
    <div id="slide1" className="carousel-item relative w-full">
        <img src="https://epmgaa.media.clients.ellingtoncms.com/img/photos/2022/09/07/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
        <img src="https://img.global.news.samsung.com/in/wp-content/uploads/2022/02/S22_Ultra_Banner_3000x2000.jpg" className="w-full" />
        <div>
            <h3>Samsung S22</h3>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i01.appmifile.com/webfile/globalimg/products/m/xiaomi-11t/section3_video.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div> 

    </div>
        </div>

        <div className='titulo-productos'>
            <h1>Productos Destacados</h1>
        </div> 
        <div className="contenedor-card">
            
        <Itemlist item={datos}/>
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