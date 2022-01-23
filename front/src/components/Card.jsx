import React from 'react'
import '../styles/Card.css'

function Card({product, price, img}) {
    return (
        <div className='card__container'>
            <img className='img__card' src={img} alt="" height="200px"/>
            <h3>{product.charAt(0).toUpperCase() + product.slice(1).toLowerCase()}</h3>
            <h4>${price}</h4>
        </div>
    )
}

export default Card
