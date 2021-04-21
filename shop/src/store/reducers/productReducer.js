import { SET_SEARCH_VALUE, SET_TOTAL_PRODUCTS, GET_PRODUCTS, PRODUCTS_FETCHING, CHANGE_PRODUCT_COLOR, SET_CURRENT_PAGE } from '../actions/actionTypes';

const defaultStore = {
    products : [],
    productsFetching : true,
    searchValue : '',
    order : 'desc',
    pagination : {
        perPage : 6,
        currentPage : 1,
        totalCount : 0
    }
}

export default function itemReducer(store = defaultStore, action) {

    switch (action.type) {
        
        case GET_PRODUCTS :

            return {
                ...store,
                products : action.payload,
                productsFetching : false
            }
        
        case PRODUCTS_FETCHING :

            return {
                ...store,
                productsFetching : action.payload
            }
        
        case SET_SEARCH_VALUE :

            return {
                ...store,
                searchValue : action.payload
            }
        
        
        case SET_CURRENT_PAGE :

            return {
                ...store,
                pagination : {
                    ...store.pagination,
                    currentPage : action.payload
                }
            }
        
        
        case SET_TOTAL_PRODUCTS :

            return {
                ...store,
                pagination : {
                    ...store.pagination,
                    totalCount : action.payload
                }
            }

        case CHANGE_PRODUCT_COLOR:

            return {
                ...store,
                products : store.products.map(product => product.id === action.payload.productId 
                ? {...product, defaultColor : action.payload.defaultColor } : product)
            }

        default:
            return store

    }

}