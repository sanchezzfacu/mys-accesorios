import React from 'react'
import '../styles/PanelAdmin.css'

function PanelAdmin() {
    return (
        <div className='admin__container'>
            <h1>Panel de Abi Sanchez</h1>
            <a href="/home"><button>Menu principal</button></a>
            <a href="/crearcategoria"><button>Crear categoria</button></a>
            <a href="/publicar"><button>Crear producto</button></a>
        </div>
    )
}

export default PanelAdmin
