import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions'
import Searchbar from './Searchbar'
import Navbar from './Navbar'
import Card from './Card'
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
                products.map(el => {
                    return (
                        <div className='card__home' key={el.id}>
                            <a href={'/details/'+ el.id}>
                                <Card img={el.img} product={el.product} price={el.price}/>
                            </a>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home
