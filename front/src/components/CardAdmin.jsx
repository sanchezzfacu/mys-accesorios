import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/actions'

import '../styles/CardAdmin.css'

function CardAdmin({id, product, price, img, stock}) {
    const dispatch = useDispatch()

    const handleDeleteProduct = (e) => {
        dispatch(deleteProduct(e.target.value))
    }

    return (
        <div className='card-admin-container'>
            <div>
                <img className='card-img' src={img} alt="imagen no disponible"/>
            </div>
            <h3 className='card-name-admin'>{product.charAt(0).toUpperCase() + product.slice(1).toLowerCase()}</h3>
            <h3 className='card-price-admin'>${price}</h3>
            <h3 className='card-stock-admin'>{stock} unidades</h3>
            <div>
                <button className='btn-minus'>-1</button>
                <button onClick={handleDeleteProduct} value={id} className='btn-delete'>Eliminar</button>
            </div>
        </div>
    )
}

export default CardAdmin
