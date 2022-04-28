import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions'
import Searchbar from './Searchbar'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'
import Spinner from 'react-bootstrap/Spinner'
import '../styles/Home.css'

function Home() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
        document.title = 'MyS accesorios'
    },[dispatch])

    return (
        <div className='container-home'>
            <Navbar/>
            <Searchbar/>
            <div className='align__card'>
            {
                products.length ? products.map(el => {
                    return (
                        <div className='card__home' key={el.id}>
                            <a href={'/details/'+ el.id}>
                                <Card img={el.img} product={el.product} price={el.price} stock={el.quantity} />
                            </a>
                        </div>
                    )
                })
                 :

                <div className='spinner-container'>
                    <Spinner className='spinner' animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
            </div>
            <div className='footer-container'>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
