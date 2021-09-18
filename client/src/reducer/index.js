const initialState = {
    clients: [],
    products: [],
    details: [],
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_CLIENTS' :
            return {
                ...state,
                clients: action.payload
            }
         
        case 'GET_CLIENT_NAME' :
            return {
                ...state,
                clients: action.payload
            }    
        
        case 'GET_PRODUCTS' :
            return {
                ...state,
                products: action.payload
            }    

        case 'GET_DETAILS' :
            return {
                details: action.payload
            }     

        default :
            return state
    }
}

export default rootReducer