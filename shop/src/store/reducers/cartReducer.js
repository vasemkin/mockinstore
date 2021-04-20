import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, TOGGLE_CART_MODAL } from '../actions/actionTypes'

const defaultStore = {
    totalItems : 0,
    totalCost : 0,
    modalOpen : false,
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
            let { totalItems, totalCost } = store

            const item = selected[id] || {
                amount: 0,
                properties : action.payload
            };

            item.amount++
            totalItems++
            totalCost += parseInt(action.payload.price)

            return {
                ...store, 
                totalItems,
                totalCost,
                selected: {
                    ...selected,
                    [id] : item
                }
            }

        case TOGGLE_CART_MODAL:

            return{
                ...store, 
                modalOpen : !store.modalOpen
            }
    
        default:
            return store
    }

}