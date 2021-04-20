import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../actions/actionTypes'

const defaultStore = {
    total : 0,
    selected : {
        // id : {
        //     amount : 0,
        //     properties : {}
        // }
    }
}

export default function cartReducer(store = defaultStore, action) {

    switch (action.type) {

        case ADD_PRODUCT_TO_CART:
            
            const { id } = action.payload
            const { selected } = store
            let { total } = store

            const item = selected[id] || {
                amount: 0,
                properties : action.payload
            };

            item.amount++
            total++

            return {
                ...store, 
                total,
                selected: {
                    ...selected,
                    [id] : item
                }
            }
    
        default:
            return store
    }

}