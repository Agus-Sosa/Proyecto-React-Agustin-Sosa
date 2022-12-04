import Item from "./Item"
import './home.css'
function Itemlist({item}) {
    return (
        <>
        {
            item.length > 0 ?
            item.map(item => <Item key={item.id} id={item.id} imagen={item.imagen} nombre={item.nombre} empresa={item.empresa} precio={item.precio}/>)
            :   <div className="contenedor-carga">
                    <progress className="progress w-56"></progress>
                </div>

            }
            </>
    )
}

export default Itemlist;