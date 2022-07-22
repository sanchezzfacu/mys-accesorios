import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
    const { loginWithRedirect, user } = useAuth0()
    const saveSessionInLocalStorage = (user) => {
        window.localStorage.setItem(
            'user', JSON.stringify(user)
        )
    }

    return (
        <button 
            onClick={() => {
                saveSessionInLocalStorage(user)
                loginWithRedirect()
            }}>
            Iniciar sesión
        </button>
    )
}

export default LoginButton
