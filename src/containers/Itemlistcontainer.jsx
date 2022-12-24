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
        <div className="contenedor-card">
            
        <Itemlist item={datos}/>
        </div>
        </>
    )
}
AOS.init();



export default Itemlistcontainer;