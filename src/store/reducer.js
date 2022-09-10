import { FETCH_PRODUCTS, RECEIVE_PRODUCTS, DELETE_PRODUCTS, SET_MODAL_STATE, SET_MODAL_TYPE, SET_PRODUCT} from "./actions";

const initialState = {
    products: [],
    productsLoading: false,
    isModalOpen: false,
    isModalCreate: true,
    editProduct: null
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
        
        case SET_MODAL_STATE: 
            return {
              ...state,
              isModalOpen: action.isOpen,
            }
        case SET_MODAL_TYPE: 
            return {
              ...state,
              isModalCreate: action.isCreate,
            }
        
        case SET_PRODUCT: 
            return {
              ...state,
              editProduct: action.payload,
            }

            
    default:
        return state;
    }
}
