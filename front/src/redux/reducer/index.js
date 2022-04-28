const initialState = {
    clients: [],
    products: [],
    details: [],
    categories: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_PRODUCTS' :
            return {
                ...state,
                products: action.payload
            }    
        
        case 'GET_PRODUCT_BY_NAME' :
            return {
                ...state, 
                products: action.payload
            }
        
        case 'GET_DETAILS' : 
            return {
                ...state,
                details: action.payload
            }

        case 'GET_CATEGORIES' : 
            return {
                ...state,
                categories: action.payload
            }
        
        case 'DELETE_PRODUCT' : 
            return {
                ...state,
            }    

        case 'FILTER_PRODUCTS' :
            return {
                ...state,
                products: action.payload
            }

        default :
            return state
    }
}

export default rootReducer