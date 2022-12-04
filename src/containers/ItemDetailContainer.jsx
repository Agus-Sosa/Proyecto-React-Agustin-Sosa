import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { data } from "../utils/Productos"
import ItemDetail from "../components/ItemDetail"
import { fetchData } from "../utils/fetch-data"
import '../components/detail.css'

const ItemDetailContainer = () =>{
    const [dato, setDato] = useState({});
    const {idProducto} = useParams();

    useEffect (() =>{
        fetchData(2000, data.find(item => item.id === parseInt(idProducto)))
        .then(response => setDato(response))
        .catch(error => error)
    },[])
    
    return (
        <div className="contenedor-item">
        <ItemDetail item={dato}/>
        </div>
    )
}


export default ItemDetailContainer;