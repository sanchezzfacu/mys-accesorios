import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCategory } from '../redux/actions'

function CrearCategoria() {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: "",
    })

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createCategory(input))
        alert('Categoria creada')
        setInput({
            name: "",
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder='Categoria..'
                    type='text'
                    onChange={handleInputChange}
                />
                <button>
                    Crear
                </button>
            </form>
        </div>
    )
}

export default CrearCategoria
