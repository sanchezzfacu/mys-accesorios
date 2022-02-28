import React from 'react'
import '../styles/PageNotFound.css'

function PageNotFound() {
    return (
        <div className='error__container'>
            <h1>Error, página no encontrada</h1>
            <button className='btn-error'>
                <a href='/home'>
                    Volver a inicio
                </a>
            </button>
        </div>
    )
}

export default PageNotFound
