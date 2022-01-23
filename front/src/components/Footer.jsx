import React from 'react'
import ig from '../logoig.png'
import fb from '../logofb.png'
import wpp from '../logowpp.png'
import '../styles/Footer.css'

function Footer() {
    return (
            <footer>
                <span>Seguinos en nuestras redes</span>
                <a className='ig__item' href="https://www.instagram.com/_mys_accesorios/" target='_blank' rel='noreferrer'><img src={ig} alt='' height='60px'/></a>
                <a className='fb__item' href="https://www.facebook.com/MyS_accesorios-103511165361163" target='_blank' rel='noreferrer'><img src={fb} alt='' height='60px'/></a>
                <a className='wpp__item' href="https://wa.me/543876396788?text=Hola%20estoy%20interesada%20en%20uno%20de%20sus%20productos,%20me%20das%20informacion?" target='_blank' rel='noreferrer'><img src={wpp} alt='' height='60px'/></a>
            </footer>
    )
}

export default Footer
