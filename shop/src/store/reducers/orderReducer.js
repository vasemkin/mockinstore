import { POST_ORDER_DATA, TOGGLE_ORDER_COMPLETED } from '../actions/actionTypes';

const defaultStore = {
    orders : {},
    completed : false
}

export default function orderReducer(store = defaultStore, action) {

    switch (action.type) {

        case POST_ORDER_DATA:

            return {
                ...store, 
                orders : {
                    ...store.orders, 
                    ...action.payload
                }
            }

        case TOGGLE_ORDER_COMPLETED:

            return{
                ...store, 
                completed : action.payload
            }
        
        default:
            return store

    }

}