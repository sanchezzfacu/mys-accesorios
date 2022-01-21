import React from 'react'
import logo from '../logo.png'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="/home"><img className='logo__nav' src={logo} height="60px" alt=""/></a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/direccion">Direccion</a></li>
                <li><a href="/redes">Redes sociales</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
