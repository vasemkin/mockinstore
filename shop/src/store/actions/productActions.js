import axios from 'axios'
import { SET_PAGINATION , GET_PRODUCTS , PRODUCTS_FETCHING } from './actionTypes'

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

export const getProducts = (order = 'desc', search = '') => {
    return async dispatch => {
        let response
        dispatch(productsFetchingCreator(true))
        search === '' 
        ? response = await axios.get(`http://localhost:8888/items/?_sort=purchased&_order=${order}`)
        : response = await axios.get(`http://localhost:8888/items/?_sort=purchased&_order=${order}&productName_like=${search}`)
        dispatch(getProductsCreator(response.data))
    }
}