import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions'
import Searchbar from './Searchbar'
import Navbar from './Navbar'
import Card from './Card'

function Home() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    return (
        <div>
            <Navbar/>
            <Searchbar/>
            <h1>Home</h1>

            {
                products.map(el => {
                    return (
                        <div key={el.id}>
                            <Card img={el.img} product={el.product} price={el.price}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home
