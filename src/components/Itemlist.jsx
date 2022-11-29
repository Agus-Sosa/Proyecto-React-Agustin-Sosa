import Item from "./Item"
function Itemlist({props}) {
    return (
        <>
        {
            props.map(item => 
                <Item 
                key={item.id}
                id={item.id}
                imagen={item.imagen}
                nombre={item.nombre}
                empresa={item.empresa}
                precio={item.precio}
                />)
            }
            </>
    )
}

export default Itemlist;