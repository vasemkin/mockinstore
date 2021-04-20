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

        case REMOVE_PRODUCT_FROM_CART:
            
            const rm_id = action.payload.id
            const rm_selected = store.selected
            let rm_totalItems = store.totalItems
            let rm_totalCost  = store

            const rm_item = rm_selected[rm_id];

            rm_item.amount--
            rm_totalItems--
            rm_totalCost -= parseInt(action.payload.price)

            let newObj

            if (rm_item.amount === 0) {
                newObj = {...rm_selected}
                delete newObj[rm_id]
            } else {
                newObj = {
                    ...rm_selected,
                    [rm_id] : rm_item
                }
            }

            return {
                ...store, 
                totalItems : rm_totalItems,
                totalCost : rm_totalCost,
                selected : newObj
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