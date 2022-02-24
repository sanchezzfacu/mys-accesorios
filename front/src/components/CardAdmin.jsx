import React from 'react'
import '../styles/CardAdmin.css'
function CardAdmin({product, price, img, stock}) {
    return (
        <div className='card-container-admin'>
            <div>
                <img className='card-img' src={img} alt="imagen no disponible"/><br/>
            </div>
            <h3>{product.charAt(0).toUpperCase() + product.slice(1).toLowerCase()}</h3>
            <h3>${price}</h3>
            <div className='stock-items'>
                <h3>{stock} unidades</h3>
                <button className='btn-minus'>-1</button>
            </div>
            <div className=''>
                <button className='btn-edit'>Editar</button>
                <button className='btn-delete'>Eliminar</button>
            </div>
        </div>
    )
}

export default CardAdmin
