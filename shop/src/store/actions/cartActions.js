import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../actions/actionTypes'

export const addProduct = (selected) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: selected
    }
}

export const removeProduct = (selected) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: selected
    }
}