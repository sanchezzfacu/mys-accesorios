import React from 'react'
import '../styles/Card.css'

function Card({product, price, img}) {
    return (
        <div className='card__container'>
            <img className='img__card' src={img} alt="" height="200px"/>
            <h3>{product}</h3>
            <h4>${price}</h4>
        </div>
    )
}

export default Card
