import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getDetails } from '../../actions'

function ClientDetail() {
    const dispatch = useDispatch()
    const details = useSelector((state) => state.details)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetails(id))
    }, [dispatch, id])

    return (
        <div>
            <button>Agregar compra</button>
            <button>Volver a inicio</button>
            {
                details.length ? 
                details.map(el => {
                    return (
                        <div key={el.id}>
                            <h1>Nombre: {el.name}</h1>
                            <h2>Productos comprados: {el.products}</h2>
                            <h2>Total gastado: {el.totalSpent}</h2>
                            <h2>Celular: {el.phone}</h2>
                            <h2>Fecha de compra: {el.buyDay}</h2>
                        </div>
                    )
                }) :
                <p>Loading...</p>
            }
        </div>    
    )
}

export default ClientDetail
