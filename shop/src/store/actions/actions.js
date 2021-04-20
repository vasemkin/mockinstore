import axios from 'axios'
import { ADD_PRODUCT_TO_CART , REMOVE_PRODUCT_FROM_CART , GET_PRODUCTS } from './actionTypes'

export const getProductsCreator = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export const getProducts = (order = 'desc') => {
    return async dispatch => {
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