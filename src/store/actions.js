import axios from "axios";
export const BASE_API_URL = 'http://178.62.221.120/api'

export const FETCH_PRODUCTS = 'FETCH_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCT';

export const getProducts = () => ({
    type: FETCH_PRODUCTS
})

export const setProducts = (data) => ({
    type: RECEIVE_PRODUCTS, 
    payload: data
})

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(getProducts())
        try {
            const response = await axios.get(`${BASE_API_URL}/products`);
            console.log('response', response)
            dispatch(setProducts(response.data))
        } catch (error) {
            console.error(error)
        }
    }
}

export const createProducts = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_API_URL}/products/create`, payload);
            if (response.status === 201) {
                dispatch(fetchProducts())
            }
        } catch (error) {
            console.error(error)
        }
    }
}