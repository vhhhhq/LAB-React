import { FETCH_PRODUCTS, RECEIVE_PRODUCTS } from "./actions";
const initialState = {
    products: [],
    productsLoading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_PRODUCTS:
            return {
                ...state,
                productsLoading: true
            }
        
        case RECEIVE_PRODUCTS:
            return{
                ...state,
                productsLoading: false,
                products: action.payload
            }
            
    default:
        return state;
    }
}