import axios from 'axios'

export function getClients() {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/client')
        return dispatch({
            type: 'GET_CLIENTS',
            payload: json.data
        })
    }
} 

export function getClientName(name) {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/client?name=' + name)
        return dispatch({
            type: 'GET_CLIENT_NAME',
            payload: json.data
        })
    }
}

export function getProducts() {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/product')
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: json.data
        })
    }
}