import React, { useState } from 'react'
import logo from '../logo.png'
import '../styles/Navbar.css'

function Navbar() {
    // eslint-disable-next-line
    const [url, setUrl] = useState('https://wa.me/543876396788?text=Hola%20estoy%20interesada%20en%20uno%20de%20sus%20productos,%20me%20das%20informacion?') 

    return (
        <nav>
            <ul>
                <li><a href="/home"><img className='logo__nav' src={logo} height="60px" alt=""/></a></li>
                
                <li><a href={url} target='_blank' rel='noreferrer' >Contacto</a></li>
                <li><a href="/direccion">Direccion</a></li>
                <li><a href="/redes">Redes sociales</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
