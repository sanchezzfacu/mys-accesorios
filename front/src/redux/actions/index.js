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

export function getDetails(id) {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/product/' + id)
        return dispatch({
            type: 'GET_DETAILS',
            payload: json.data
        })
    }
}

export function createProduct(payload) {
    return async function(dispatch) {
        const json = await axios.post("http://localhost:3001/createproduct", payload)
        return json
    }
}

export function getCategories() {
    return async function(dispatch) {
        const json = await axios.get("http://localhost:3001/category")
        return dispatch({
            type:"GET_CATEGORIES",
            payload: json.data
        })
    }
}