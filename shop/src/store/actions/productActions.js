import axios from 'axios'
import { SET_SEARCH_VALUE , SET_TOTAL_PRODUCTS, GET_PRODUCTS , PRODUCTS_FETCHING, CHANGE_PRODUCT_COLOR, SET_CURRENT_PAGE } from './actionTypes'

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

export const changeProductColor = (productId, defaultColor) => {
    return {
        type: CHANGE_PRODUCT_COLOR,
        payload: {
            productId : productId,
            defaultColor : defaultColor
        }
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
}

export const setSearchValue = (value) => {
    return {
        type: SET_SEARCH_VALUE,
        payload: value
    }
}

export const setTotalProducts = (value) => {
    return {
        type: SET_TOTAL_PRODUCTS,
        payload: parseInt(value)
    }
}

export const getProducts = (order = 'desc', search = '', currentPage, perPage) => {
    return async dispatch => {
        const baseQuery = `http://localhost:8888/items/?_sort=purchased&_order=${order}&_page=${currentPage}&_limit=${perPage}`
        let response
        dispatch(productsFetchingCreator(true))
        search === '' 
        ? response = await axios.get(baseQuery)
        : response = await axios.get(`${baseQuery}&productName_like=${search}`)
        dispatch(setTotalProducts(response.headers['x-total-count']))
        dispatch(getProductsCreator(response.data))
    }
}