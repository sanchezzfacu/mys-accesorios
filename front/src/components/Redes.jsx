import React from 'react'
import ig from '../img/logoig.png'
import fb from '../img/logofb.png'
// import wpp from '../img/logowpp.png'
import '../styles/Redes.css'
function Redes() {
    return (
        <div className='redes-container'>
            <div className="btn-volver">
                <a href="/"><button>Volver a inicio</button></a>
            </div>
            <div>
                <h1 className='redes-header'>Seguinos en nuestras redes sociales y no te pierdas nuestras ofertas</h1>
            </div>
            <div className='container-items-redes'>
                <div className='redes-div'>
                    <a href="https://www.instagram.com/_mys_accesorios/"><img className='img-ig' src={ig} alt=""/></a>
                    <h3>Instagram - Mys Accesorios</h3>  
                </div>
                <div className='redes-div'>
                    <a href="https://www.facebook.com/MyS_accesorios-103511165361163"><img className='img-fb' src={fb} alt=""/></a>
                    <h3>Facebook - MyS Accesorios</h3>
                </div>
            </div>
        </div>
    )
}

export default Redes
