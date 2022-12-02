import React from 'react'
import ItemDetail from '../components/ItemDetail'
import { useEffect, useState } from 'react'
import { data } from '../utils/Productos'
const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect (() =>{
        fetchData(2000, data[0])
        .then(response => setDato(response))
        .catch(error => console.log(error))
    },[]);

    return (
        <>
        <ItemDetail item={dato}/>
        </>
    )
}

export default ItemDetailContainer