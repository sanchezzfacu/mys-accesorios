import axios from 'axios'
import {
    ALL_PRODUCTS,
    ALL_CATEGORIES,
    PRODUCT_BY_NAME,
    DETAIL_PRODUCT,
    CREATE_PRODUCT,
    CREATE_CATEGORY,
    DELETE_PRODUCT,
} from '../../constantes'


export function getProducts() {
    return async function(dispatch) {
        let json = await axios.get(ALL_PRODUCTS)
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: json.data
        })
    }
}

export function getProductByName(name) {
    return async function(dispatch) {
        let json = await axios.get(PRODUCT_BY_NAME + name)
        if(json.data.length) {
            return dispatch({
                type: 'GET_PRODUCT_BY_NAME',
                payload: json.data
            })
        }
        else if(json.status !== 200) {
            return dispatch({
                type: 'GET_PRODUCT_BY_NAME',
                payload: json.data
            })
        }
    }
}

export function getDetails(id) {
    return async function(dispatch) {
        let json = await axios.get(DETAIL_PRODUCT + id)
        return dispatch({
            type: 'GET_DETAILS',
            payload: json.data
        })
    }
}

export function createProduct(payload) {
    return async function(dispatch) {
        const json = await axios.post(CREATE_PRODUCT, payload)
        return json
    }
}

export function createCategory(payload) {
    return async function(dispatch) {
        const json = await axios.post(CREATE_CATEGORY, payload)
        return json
    }
}

export function getCategories() {
    return async function(dispatch) {
        const json = await axios.get(ALL_CATEGORIES)
        return dispatch({
            type:"GET_CATEGORIES",
            payload: json.data
        })
    }
}

export function deleteProduct(id) {
    return async function(dispatch) {
        const json = await axios.delete(DELETE_PRODUCT + id)
        return json
    }
}

export function filterProducts(payload) {
    return async function(dispatch) {
        const json = await axios.get(ALL_PRODUCTS)
        let dataFiltered = []
        let filterParams = payload.toString()
        let products = json.data
        console.log(filterParams)
        let includesCategory = (el => filterParams.includes(el.name))

        for(let i = 0; i < products.length; i++) {
            if(products[i].categories.some(includesCategory)) dataFiltered.push(products[i])
        }
        return dispatch({
            type: 'FILTER_PRODUCTS',
            payload: dataFiltered
        })
    }
}
