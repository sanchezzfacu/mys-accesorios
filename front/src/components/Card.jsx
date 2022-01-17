import React from 'react'
import '../styles/Card.css'

function Card({product, price, img}) {
    return (
        <div className='card__container'>
            <img src={img} alt="" height="200px"/>
            <h2>{product}</h2>
            <h3>${price}</h3>
        </div>
    )
}

export default Card
