import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useAuth0 } from '@auth0/auth0-react'

function Profile() {
    const {user, isAuthenticated, isLoading} = useAuth0()
    console.log(user)
    if(isLoading) {
        return(
            <div className='spinner-container'>
                <Spinner className='spinner' animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

    return (
        isAuthenticated && 
            <div>
                <h1>{user.name}</h1>
            </div>
    )
    
}

export default Profile
