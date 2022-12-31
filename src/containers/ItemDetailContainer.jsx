import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../components/ItemDetail"
import '../components/detail.css'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"

const ItemDetailContainer = () =>{
    const [dato, setDato] = useState({});
    const {idProducto} = useParams();

    useEffect (() =>{
        const fetchFireStoreDetail = async() =>{
            const docRef = doc(db, "Productos", idProducto);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    return {
                        id: idProducto,
                        ...docSnap.data()
                    };
                } else {
                    console.log("No such document!");
                }
        }
        fetchFireStoreDetail()
        .then(respuesta => setDato(respuesta))
        .catch(error => console.log(error))
    },[])
    
    return (
        <>
        <div className="contenedor-item">
        <ItemDetail item={dato}/>
        </div>
        
        </>
    )
}


export default ItemDetailContainer;