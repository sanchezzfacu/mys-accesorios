import React, { useState, useEffect } from 'react'
import { getCategories, getProductByName } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/Searchbar.css' 
import filter from '../img/filter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function Searchbar() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getProductByName(input))
    }
    
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className='searchbar'>
            <input 
            placeholder='Buscar producto...'
                type='text'
                onChange={handleInputChange}
                spellCheck="false"
            />
            <button
                className='btn-container'
                onClick={handleSubmit}
                type='submit' >                
                <FontAwesomeIcon className='btn-search' icon={faSearch} />
            </button>
                <a href="#miModal">
                    <button className='btn-filter'>
                        <img src={filter} height='30PX' alt="" />
                    </button>
                </a> 
                <div id='miModal' className='modal'>
                    <div className="modal-contenido">
                        <div className="cerrar-modal">
                            <a href="#filter">X</a>
                        </div>
                        <div className='modal-title'>
                            <h1>Filtrar productos</h1>
                        </div>
                        <div className="detail-items">
                            {
                                categories.map(el => {
                                    return (
                                        <div key={el.id}>
                                            <label>
                                                {el.name.toUpperCase()}
                                                <input value={el.name} type='checkbox'/>
                                            </label>
                                        </div>        
                                    )
                                })
                            }
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
