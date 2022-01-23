import React, { useEffect, useState } from 'react'
import { getDetails } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
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
        <div className='container__details__route'>
            <nav>
                <Navbar/>
            </nav>
            <a className='btn__volver' href="/home"><button className='btn__inicio' >Inicio</button></a>
            {
                product ? product.map(el => {
                    return (
                        <div key={el.id}>
                            <div className='container__details__items'>
                                <div className='img__details'>
                                    <img src={el.img} alt="Imagen no encontrada" height="400px"/>
                                </div>
                                <div className='detail__items'>
                                    <h2>{el.product}</h2>
                                    <br />
                                    <h3>{el.description}</h3>
                                    <br /><br />
                                    <h2>${el.price}</h2>
                                    <br /><br />
                                    <a href={wpp} target='_blank' rel="noopener noreferrer" ><button className='btn__comprar'>Comprar</button></a>
                                </div>
                            </div>
                        <Footer/>
                        </div>
                    )
                }) :
                <div className='loading__icon'>CARGANDO...</div>
            }
        </div>
    )
}

export default Details
