import React from 'react'
import { Spinner } from 'reactstrap'
import '../styles/SpinnerLoading.css'

function SpinnerLoading() {
    return (
        <div className='spinner-container'>
            <Spinner className='spinner' color='primary'/>
        </div>
    )
}

export default SpinnerLoading
