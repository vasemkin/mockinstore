import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, TOGGLE_CART_MODAL, TOGGLE_ORDER_FIELD } from '../actions/actionTypes'

export const addProduct = (selected) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: selected
    }
}

export const isCartModalOpened = () => {
    return {
        type: TOGGLE_CART_MODAL
    }
}

export const isOrderShown = () => {
    return {
        type: TOGGLE_ORDER_FIELD
    }
}

export const removeProduct = (selected) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: selected
    }
}