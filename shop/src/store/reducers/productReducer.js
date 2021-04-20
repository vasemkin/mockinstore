import { ADD_ITEM_TO_CART , REMOVE_ITEM_FROM_CART, GET_PRODUCTS } from '../actions/actionTypes';

const defaultStore = {
    products : [],
    isFetching : true
}

export default function itemReducer(store = defaultStore, action) {

    switch (action.type) {
        
        case GET_PRODUCTS :

            return {
                ...store,
                products : action.payload,
                isFetching : false
            }

        default:
            return store

    }

}