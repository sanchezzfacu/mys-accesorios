import React from 'react'
import logo from '../logo.png'
import '../styles/Nav.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><img src={logo} height="150px" alt=""/></li>
                <a href="/contact"><li>Contacto</li></a>
                <a href="/direccion"><li>Direccion</li></a>
                <a href="/redes"><li>Redes sociales</li></a>
            </ul>
        </nav>
    )
}

export default Navbar
