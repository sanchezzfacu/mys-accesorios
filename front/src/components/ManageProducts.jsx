import React, { useEffect , useState} from 'react'
import { getProducts, getProductByName } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import CardAdmin from './CardAdmin'
import '../styles/ManageProducts.css'

function ManageProducts() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    // eslint-disable-next-line
    const [input, setInput] = useState('')

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getProductByName(input))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={handleInput}
                />
                <button>Buscar</button>
            </form>
            <div className='item-container'>  
                {
                    products ? products.map(el => {
                        return (
                                <div className='item' key={el.id}>
                                    <CardAdmin img={el.img} product={el.product} price={el.price} stock={el.quantity} />
                                </div>
                        )
                    }) :    
                    <div/>
                }
            </div>
        </div>
    )
}

export default ManageProducts
