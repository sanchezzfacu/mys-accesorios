import React, { useState } from 'react'
import { getProductByName } from '../redux/actions'
import { useDispatch } from 'react-redux'
import '../styles/Searchbar.css' 
import filter from '../filter.png'

function Searchbar() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getProductByName(input))
    }
    
    return (
        <div className='searchbar'>
            <input 
            placeholder='Buscar producto...'
                type='text'
                onChange={handleInputChange}
                spellCheck="false"
            />
            <button
                onClick={handleSubmit}
                type='submit'
            >Buscar</button>
                <a href="#miModal"><img src={filter} alt="" /></a> 
                <div id='miModal' className='modal'>
                    <div className="modal-contenido">
                        <div className="cerrar-modal">
                            <a href="#filter">X</a>
                        </div>
                        <div>
                            <h1>Filtrar productos</h1>
                        </div>
                        <div className="modal-btn">
                            <a href="#filter"><button>Cancelar</button></a>
                            <a href="#filter"><button>Aplicar</button></a>
                        </div>
                    </div>
                </div>      
        </div>
    )
}

export default Searchbar
