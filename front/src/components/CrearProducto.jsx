import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, getCategories } from '../redux/actions'
import '../styles/CrearProducto.css'

function CrearProducto() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const [input, setInput] = useState({
        product: "",
        img: "",
        price: "",
        quantity: "",
        description: "",
        category: []
    })

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createProduct(input))
        alert('Producto creado')
        setInput({
            product: "",
            img: "",
            price: "",
            quantity: "",
            description: "",
            category: []
        })
    }

    function handleSelect(e) {
        setInput({
            ...input,
            category: [...input.category, e.target.value]
        })
    }

    useEffect(() => {
        dispatch(getCategories())
    },[dispatch])

    return (
        <div className='form__container'>
            <form className='form-container' onSubmit={handleSubmit}>
                <label>Producto</label>
                <input
                    placeholder='Producto..'
                    type="text"
                    value={input.product}
                    name="product"
                    onChange={handleInputChange}
                    required
                    spellCheck='false'
                />
                <br/>

                <label>Link de la foto</label>
                <input
                    placeholder='Link de la foto..'
                    value={input.img}
                    name="img"
                    onChange={handleInputChange}
                    required
                    spellCheck='false'
                />
                                
                <br/>
                
                <label>Stock</label>
                <input
                    placeholder='Stock..'
                    value={input.quantity}
                    type="number"
                    name="quantity"
                    onChange={handleInputChange}
                    required
                    spellCheck='false'
                />
               
                <br/>
                
                <label>Precio</label>
                <input
                    placeholder='Precio..'
                    value={input.price}
                    name="price"
                    onChange={handleInputChange}
                    required
                    spellCheck='false'
                />
                
                <br/>

                <label>Descripción</label>
                <textarea
                    placeholder='Descripcion..'
                    value={input.description}
                    name="description"
                    onChange={handleInputChange}
                    required
                    spellCheck='false'
                />
                <br/>

                <select onChange={handleSelect}>
                    {
                        categories.map(el => {
                            return (
                                <option key={el.id} value={el.name} >{el.name.toUpperCase()}</option>
                            )
                        })
                    }
                </select>
                <br/>

                <button>Publicar</button>
            </form>
            <a href="/home"><button>Inicio</button></a>
        </div>
    )
}

export default CrearProducto
