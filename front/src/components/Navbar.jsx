import React, { useState } from 'react'
import logo from '../img/logo.png'
// import menubutton from '../img/menubutton.png'
import '../styles/Navbar.css'

function Navbar() {
    // eslint-disable-next-line
    const [url, setUrl] = useState('https://wa.me/543876396788?text=Hola%20estoy%20interesada%20en%20uno%20de%20sus%20productos,%20me%20das%20informacion?') 

    return (
        <nav className='nav-bar'>
            <ul className='nav-ul'>
                <li className='nav-li'><a href="/"><img className='logo__nav' src={logo} height="60px" alt=""/></a></li>
                <li className='nav-li'><a href={url} target='_blank' rel='noreferrer' >Contacto</a></li>
                <li className='nav-li'><a href="/direccion">Direccion</a></li>
                <li className='nav-li'><a href="/redes">Redes sociales</a></li>
            </ul>
            {/* <ul className='nav-responsive-ul'>
                <div className='nav-responsive-button'><img src={menubutton} alt="" height='30px' /></div>
                <div className='nav-li-container'>
                    <li className='nav-responsive-li'><a href={url} target='_blank' rel='noreferrer' >Contacto</a></li>
                    <li className='nav-responsive-li'><a href="/direccion">Direccion</a></li>
                    <li className='nav-responsive-li'><a href="/redes">Redes sociales</a></li>
                </div>
            </ul> */}
        </nav> 
    )
}

export default Navbar
