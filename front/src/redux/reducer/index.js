const initialState = {
    clients: [],
    products: [],
    details: [],
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
            
        default :
            return state
    }
}

export default rootReducer