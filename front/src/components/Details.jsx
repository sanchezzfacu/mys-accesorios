import React, { useEffect } from 'react'
import { getDetails } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function Details() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.details)
    const { id } = useParams()

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
                            <button>Comprar</button>
                            <button>Contactar</button>
                        </div>
                    )
                }) :
                <div>CARGANDO...</div>
            }
        </div>
    )
}

export default Details
