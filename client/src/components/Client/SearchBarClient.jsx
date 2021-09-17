import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getClientName } from '../../actions'

function SearchBarClient() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getClientName(name))
        console.log()
    }

    return (
        <div>
            <input 
                placeholder= "Buscar cliente"
                type= "text"
                onChange={handleInputChange}
            />
            <button 
                type="submit"
                onClick={handleSubmit}> 
                Buscar</button>
        </div>
    )
}

export default SearchBarClient
