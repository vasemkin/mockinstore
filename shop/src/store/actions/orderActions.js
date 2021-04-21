import { POST_ORDER_DATA, TOGGLE_ORDER_COMPLETED } from '../actions/actionTypes'
import axios from 'axios'
import makeid from "../../misc/makeid";

export const postOrderCreator = (order) => {
    return {
        type : POST_ORDER_DATA,
        payload : order
    }
}

export const isOrderCompleted = (bool) => {
    return {
        type: TOGGLE_ORDER_COMPLETED,
        payload : bool
    }
}

export const postOrder = (order) => {

    return async dispatch => {

        try {

            const id = makeid(10)
    
            await axios({
                method: 'post',
                url: 'http://localhost:8888/orders/',
                data: {
                    [id] : order   
                }
              })
    
            dispatch(isOrderCompleted(true))
            dispatch(postOrderCreator({ [id] : order }))
            
        } catch (error) {

            //fail
            
        }


    }
}