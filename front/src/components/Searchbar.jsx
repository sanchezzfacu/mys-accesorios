import React, { useState } from 'react'
import { getProductByName } from '../redux/actions'
import { useDispatch } from 'react-redux'
 
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
        <div>
            <input 
            placeholder='Buscar producto'
                type='text'
                onChange={handleInputChange}
            />
            <button
                onClick={handleSubmit}
            >Buscar</button>
        </div>
    )
}

export default Searchbar