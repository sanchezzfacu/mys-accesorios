import React from 'react'
import ig from '../img/logoig.png'
import fb from '../img/logofb.png'
import wpp from '../img/logowpp.png'
import '../styles/Footer.css'

function Footer() {
    return (
            <footer>
                <div className='footer-span'>
                    <span>SEGUINOS EN NUESTRAS REDES Y NO TE PIERDAS NUESTRAS OFERTAS!</span>
                </div>
                <div className='social-media-container'>
                    <a className='ig__item' href="https://www.instagram.com/_mys_accesorios/" target='_blank' rel='noreferrer'><img className='img-footer' src={ig} alt='' height='80px'/></a>
                    <a className='fb__item' href="https://www.facebook.com/MyS_accesorios-103511165361163" target='_blank' rel='noreferrer'><img className='img-footer' src={fb} alt='' height='80px'/></a>
                    <a className='wpp__item' href="https://wa.me/543876396788?text=Hola%20estoy%20interesada%20en%20uno%20de%20sus%20productos,%20me%20das%20informacion?" target='_blank' rel='noreferrer'><img className='img-footer' src={wpp} alt='' height='80px'/></a>
                </div>
            </footer>
    )
}

export default Footer
