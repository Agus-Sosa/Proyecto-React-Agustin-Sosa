

const ItemDetail = (item) =>{
    return (
        <>
        <div className="contenedor-producto">
            <article className="imagen-producto">
                <img src={item.imagen} alt="" />
            </article>
            <div className="informacion-producto">
                <h2>{item.nombre}</h2>
                <p>{item.empresa}</p>
            </div>
        </div>
        </>
    )
}

export default ItemDetail;