import React from 'react'
import '../styles/Direccion.css'

function Direccion() {
    return (
        <div>
            <a href="/"><button className='btn__volver volver'>Inicio</button></a>
            <div className='direccion__route'>
                <h3>
                    Entregas en Plaza Belgrano a coordinar, consultar.
                    <br/>
                    Si no entregas en mi domicilio zona norte (castañares).
                </h3>
            </div>
        </div>
    )
}

export default Direccion
