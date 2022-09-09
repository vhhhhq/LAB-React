import { FETCH_PRODUCTS, RECEIVE_PRODUCTS, DELETE_PRODUCTS, UPDATE_PRODUCTS} from "./actions";

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
        
        case DELETE_PRODUCTS: 
            return {
              ...state,
              products: state.products.filter((id)=>id!==action.payload)
            }
        
        case UPDATE_PRODUCTS: 
            return {
              ...state,
              products: state.products.filter((id)=>id !==action.payload)
            }
            
    default:
        return state;
    }
}
