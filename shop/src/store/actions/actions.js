import axios from 'axios'
import { ADD_PRODUCT_TO_CART , REMOVE_PRODUCT_FROM_CART , GET_PRODUCTS , PRODUCTS_FETCHING } from './actionTypes'

export const getProductsCreator = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export const productsFetchingCreator = (fetchStatus) => {
    return {
        type: PRODUCTS_FETCHING,
        payload: fetchStatus
    }
}

export const getProducts = (order = 'desc') => {
    return async dispatch => {
        dispatch(productsFetchingCreator(true))
        const response = await axios.get(`http://localhost:8888/items/?_sort=purchased&_order=${order}`)
        dispatch(getProductsCreator(response.data))
    }
}
export const addProductToCart = () => {
    return {
        type: ADD_PRODUCT_TO_CART
    }
}

export const removeProductFromCart = () => {
    return {
        type: REMOVE_PRODUCT_FROM_CART
    }
}