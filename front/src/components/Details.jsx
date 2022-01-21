import React, { useEffect, useState } from 'react'
import { getDetails } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import '../styles/Details.css'

function Details() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.details)
    const { id } = useParams()
    const baseUrl = 'https://localhost:3000/details/' + id+'.com'
    // eslint-disable-next-line
    const [wpp, _setWpp] = useState('https://wa.me/543876396788?text=Buenas, quiero mas informacion de este producto ' + baseUrl)

    useEffect(() => {
        dispatch(getDetails(id))
    },[id, dispatch])
    
    return (
        <div>
            <h1>Ruta detalles</h1>
            <a href="/home"><button>Volver a inicio</button></a>
            {
                product ? product.map(el => {
                    return (
                        <div key={el.id}>
                            <img src={el.img} alt="Imagen no encontrada" height="400px"/>
                            <h2>{el.product}</h2>
                            <h3>{el.price}</h3>
                            <h3>{el.description}</h3>
                            <a href={wpp} target='_blank' rel="noopener noreferrer" ><button>Comprar</button></a>
                            <button>Contactar</button>
                        </div>
                    )
                }) :
                <div className='loading__icon'>CARGANDO...</div>
            }
        </div>
    )
}

export default Details
