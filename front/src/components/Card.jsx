import React from 'react'
import buyIcon from '../img/bag-buy.png'
import '../styles/Card.css'

function Card({product, price, img}) {
    return (
        <div className='card__container'>
            <img className='img__card' src={img} alt="" height="200px"/>
            <div className="item-name-card">
                <h3>{product.charAt(0).toUpperCase() + product.slice(1).toLowerCase()}</h3>
            </div>
            <div className='lower-items-card'>
                <h4 className='h4-card'>${price}</h4>
                <button className='btn-card'>
                    <img src={buyIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Card
