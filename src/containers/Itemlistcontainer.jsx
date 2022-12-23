import AOS from 'aos';
import {FiChevronRight} from 'react-icons/fi'
import Itemlist from "../components/Itemlist";
import '../components/home.css'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { Link } from "react-router-dom";
import Portada from '../components/Portada';

const Itemlistcontainer = () =>{
    const[datos, setDatos] = useState([]);
    const {categoriaId} = useParams();

    useEffect(() =>{
        const fetchFireStore = async() => {
            let q;

            if(categoriaId) {
                q = query(collection(db, "Productos"), where('empresa', '==', categoriaId))
            } else {

                q = query(collection(db, "Productos"), orderBy('precio', 'desc'))
            }

            const querySnapshot = await getDocs(q);
            const datosFireStore = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }))
            return datosFireStore;
        }
        fetchFireStore()
        .then(resultado => setDatos(resultado))
        .catch(error => console.log(error))
    }, [categoriaId])
    return (
        <>
        <Portada/>
        <section className='contenedor-servicios'>
            <div>
            <img src="https://img.icons8.com/pastel-glyph/512/fast-cart.png" alt="" />
            <p>Entrega dentro de las 48hs</p>
            </div>
            <div>
            <img src="https://static.thenounproject.com/png/284886-200.png" alt="" />
            <p>Seguimiento en linea</p>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/81/81117.png" alt="" />
                <p>Soporte las 24hs</p>
            </div>
        </section>
        <div className='titulo-productos'>
            <h1>Productos Destacados</h1>
        </div> 
        <div className="contenedor-card">
            
        <Itemlist item={datos}/>
        </div>
        </>
    )
}
AOS.init();



export default Itemlistcontainer;