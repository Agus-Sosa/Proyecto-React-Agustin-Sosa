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
        // fetchData(2000, data.find(item => item.id === parseInt(idProducto)))
        // .then(response => setDato(response))
        // .catch(error => error)
        const fetchFireStoreDetail = async() =>{
            const docRef = doc(db, "Productos", idProducto);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    return {
                        id: idProducto,
                        ...docSnap.data()
                    };
                } else {
                    // doc.data() will be undefined in this case
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