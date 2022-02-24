import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions'
import { Oval } from 'react-loader-spinner'
import Searchbar from './Searchbar'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'
import '../styles/Home.css'
function Home() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    return (
        <div className='container'>
            <Navbar/>
            <Searchbar/>
            <div className='align__card'>
            {
                products ? products.map(el => {
                    return (
                        <div className='card__home' key={el.id}>
                            <a href={'/details/'+ el.id}>
                                <Card img={el.img} product={el.product} price={el.price} stock={el.quantity} />
                            </a>
                        </div>
                    )
                }) : 
                <div className='loading-spinner'>
                    <Oval
                        heigth="100"
                        width="100"
                        color='grey'
                        ariaLabel='loading'
                    />
                </div>
            }
            </div>
            <Footer/>
        </div>
    )
}

export default Home
