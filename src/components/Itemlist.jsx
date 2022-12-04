import Item from "./Item"
function Itemlist({item}) {
    return (
        <>
        {
            item.map(item => <Item key={item.id} id={item.id} imagen={item.imagen} nombre={item.nombre} empresa={item.empresa} precio={item.precio}/>)
            
            }
            </>
    )
}

export default Itemlist;