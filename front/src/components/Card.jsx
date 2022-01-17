import React from 'react'

function Card({product, price, img}) {
    return (
        <div>
            <img src={img} alt="" height="200px"/>
            <h1>{product}</h1>
            <h2>{price}</h2>
        </div>
    )
}

export default Card
