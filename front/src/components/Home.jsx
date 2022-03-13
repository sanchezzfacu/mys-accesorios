import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions'
import Searchbar from './Searchbar'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'
import '../styles/Home.css'
// import SpinnerLoading from './SpinnerLoading'
function Home() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
// eslint-disable-next-line
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(getProducts())
        document.title = 'MyS accesorios'
    },[dispatch])

    return (
        <div className='container-home'>
            {/* <SpinnerLoading/> */}
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
                <div/> 
                // <Spinner animation="border" role="status">
                //     <span className="visually-hidden">Loading...</span>
                // </Spinner>
            }
            </div>
            <div className='footer-container'>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
