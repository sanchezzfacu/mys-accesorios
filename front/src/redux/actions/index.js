import axios from 'axios'

export function getProducts() {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/product')
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: json.data
        })
    }
}

export function getProductByName(name) {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/product?name=' + name)
        return dispatch({
            type: 'GET_PRODUCT_BY_NAME',
            payload: json.data
        })
    }
}