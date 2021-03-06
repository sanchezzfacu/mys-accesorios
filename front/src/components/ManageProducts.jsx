import React, { useEffect , useState} from 'react'
import { getProducts, getProductByName } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import CardAdmin from './CardAdmin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../styles/ManageProducts.css'

function ManageProducts() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    // eslint-disable-next-line
    const [input, setInput] = useState('')

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch, products])

    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getProductByName(input))
    }

    return (
        <div className='manage-container'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        onChange={handleInput}
                        placeholder='Buscar producto'
                    />
                    <button><FontAwesomeIcon className='btn-search' icon={faSearch}/></button>
                </form>
            <div className='item-container'>  
                {
                    products ? products.map(el => {
                        return (
                                <div className='item' key={el.id}>
                                    <CardAdmin id={el.id} img={el.img} product={el.product} price={el.price} stock={el.quantity} />
                                </div>
                        )
                    }) :    
                    <div/>
                }
            </div>
            <div className="btn-volver">
                <a href="/"><button>Pagina principal</button></a>
                <a href="/paneladmin"><button>Menu administrador</button></a>
            </div>
        </div>
    )
}

export default ManageProducts
