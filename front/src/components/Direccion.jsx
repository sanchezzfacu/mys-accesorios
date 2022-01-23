import React from 'react'
import '../styles/Direccion.css'

function Direccion() {
    return (
        <div>
            <a href="/home"><button>Inicio</button></a>
            <div className='direccion__route'>
                <h3>
                    Entregas en Plaza Belgrano a coordinar, consultar.
                    <br/>
                    Sino entregas en mi domicilio zona norte.
                </h3>
            </div>
        </div>
    )
}

export default Direccion
