import axios from "axios";
export const BASE_API_URL = 'http://178.62.221.120/api'

export const FETCH_PRODUCTS = 'FETCH_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCT';
export const DELETE_PRODUCTS='DELETE_PRODUCTS';
export const SET_MODAL_STATE = 'SET_MODAL_STATE';
export const SET_PRODUCT = 'SET_PRODUCT';
export const SET_MODAL_TYPE = 'SET_MODAL_TYPE';




export const getProducts = () => ({
    type: FETCH_PRODUCTS
})

export const setProducts = (data) => ({
    type: RECEIVE_PRODUCTS, 
    payload: data
})

export const deleteItems=(id)=>({
    type:DELETE_PRODUCTS,
    payload: id
})


export const setModalState = (state) => ({
    type: SET_MODAL_STATE,
    isOpen: state
  })
  export const setModalType = (state) => ({
    type: SET_MODAL_TYPE,
    isCreate: state
  })
  
  export const setEditProduct = (product) => ({
    type: SET_PRODUCT,
    payload: product
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

export const createProduct = (payload) => {
    return async (dispatch) => {
  
      let formData = new FormData()
      Object.keys(payload).forEach(key => {
        if (key === 'image') {
          formData.append(key, payload[key]?.file)  
        } else {
          formData.append(key, payload[key])  
        }
      });
  
      const data = payload.image ? formData : payload
      
      try {
        const response = await axios.post(`${BASE_API_URL}/products/create`, data);
        if (response.status === 201) {
          dispatch(fetchProducts())
        }
      } catch (error) {
        console.error('ERROR FROM API', error);
      }
    }
}


export const deleteProduct = (id) => {
    return async (dispatch) => {
      try {
        const response = await axios.delete(`${BASE_API_URL}/products/delete/${id}`);
        console.log('response', response)
        if (response.status === 204) {
          dispatch(fetchProducts())
        }
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
}
  
export const editProducts = (payload,id) => {
    return async (dispatch) => {
      console.log('id',id)
      console.log('payload',payload)
      let formData = new FormData()
      Object.keys(payload).forEach(key => {
        if (key === 'image') {
          formData.append(key, payload[key]?.file)  
        } else {
          formData.append(key, payload[key])  
        }
      });
  
      const data = payload.image ? formData : payload
      
      try {
        const response = await axios.put(`${BASE_API_URL}/products/update/${id}/`,data);
        if (response.status === 200) {
          dispatch(fetchProducts())
        }
      } catch (error) {
        console.error(error);
      }
    }
}