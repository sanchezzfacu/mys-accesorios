import React, { useState } from 'react'
import logo from '../img/logo.png'
import menu from '../img/menu.png'
import '../styles/Navbar.css'

function Navbar() {
    // eslint-disable-next-line
    const [url, setUrl] = useState('https://wa.me/543876396788?text=Hola%20estoy%20interesada%20en%20uno%20de%20sus%20productos,%20me%20das%20informacion?') 

    return (
        <nav className='nav'>
            <input type="checkbox" id="check"/>
            <div className='logo-container'>
                <li className='nav-li nav-logo'><a href="/"><img className='logo__nav' src={logo} alt=""/></a></li>
                <li className='page-name'>MyS Accesorios</li>
            </div>
            <label className='btn-menu' htmlFor='check'>
                <img src={menu} alt="" height='60px' />
            </label>
            <ul className='nav-ul'>
                    <li className='nav-li'><a href="/direccion">DIRECCION</a></li>
                    <li className='nav-li'><a href={url} target='_blank' rel='noreferrer' >CONTACTANOS</a></li>
                    <li className='nav-li'><a href="/redes">NUESTRAS REDES</a></li>
            </ul>
        </nav> 
    )
}

export default Navbar
