import React, { useEffect, useState } from 'react'
import { getDetails } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import volver from '../img/volver-icon.png'
import '../styles/Details.css'

function Details() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.details)
    const { id } = useParams()
    const baseUrl =  'https://mys-accesorios.vercel.app/details/' + id
    // eslint-disable-next-line
    const [wpp, _setWpp] = useState('https://wa.me/543876396788?text=Buenas, quiero mas informacion de este producto ' + baseUrl)

    useEffect(() => {
        dispatch(getDetails(id))
    },[id, dispatch])
    
    return (
        <div className='container__details__route'>
                <Navbar/>
            <a className='btn__volver' href="/"><img src={volver} alt="" /></a>
            {
                product ? product.map(el => {
                    return (
                        <div key={el.id}>
                            <div className='container__details__items'>
                                <div className='img__details'>
                                    <img src={el.img} alt="Imagen no encontrada" height="400px"/>
                                </div>
                                <div className='detail__items'>
                                    <h2 className='product'>{el.product}</h2>
                                    <h3 className='description'>{el.description}</h3>
                                    <h2 className='price'>${el.price}</h2>
                                    <a href={wpp} target='_blank' rel="noopener noreferrer" >
                                        <button className='btn__comprar'>
                                            Comprar
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className='footer-container'>
                                <Footer/>
                            </div>
                        </div>
                    )
                }) :
                <div className='loading__icon'>CARGANDO...</div>
            }
        </div>
    )
}

export default Details
