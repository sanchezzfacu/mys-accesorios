import React, { useState } from 'react'
import '../styles/Card.css'

function Card({product, price, img, id}) {
    const baseUrl =  'https://myaccesorios.com/details/' + id
    //eslint-disable-next-line
    const [wpp, _setWpp] = useState('https://wa.me/543876396788?text=Buenas, quiero mas informacion de este producto ' + baseUrl)

    return (
        <div className='card__container'>
            <img className='img__card' src={img} alt="" height="200px"/>
            <div className="item-name-card">
                <h3>{product.charAt(0).toUpperCase() + product.slice(1).toLowerCase()}</h3>
            </div>
            <h4 className='h4-card'>${price}</h4>
            <hr></hr>
            <div className='lower-items-card'>
                <a className='linkto-details' href={'/details/'+ id}>
                    <button className='btn-card btn-details'>
                        Detalles
                    </button>
                </a>
                <a className='linkto-wpp' href={wpp} target='_blank' rel='noreferrer'>
                    <button className='btn-card btn-buy'>
                        Comprar
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Card
