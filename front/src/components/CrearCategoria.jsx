import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCategory } from '../redux/actions'
import '../styles/CrearCategoria.css'

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
        <div className='crear-categoria-container'>
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
            <div className="btn-volver">
                <a href="/"><button>Página principal</button></a>
                <a href="/paneladmin"><button>Menú administrador</button></a>
            </div>
        </div>
    )
}

export default CrearCategoria
