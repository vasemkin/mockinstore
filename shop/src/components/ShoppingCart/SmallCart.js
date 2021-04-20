import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import { isCartModalOpened } from '../../store/actions/cartActions'
import { useDispatch } from 'react-redux'
import classes from './ShoppingCart.module.css'

const SmallCart = (props) => {

    const dispatch = useDispatch()
    const cart = props.cart
  
    function cartModalHandler() {
      dispatch(isCartModalOpened())
    }

    return(
        <Button onClick={cartModalHandler} className={classes.SmallCart} as='div' labelPosition='left' size='big'>
            <Label as='a' basic>
                {cart.totalItems}
            </Label>
            <Button icon>
                <Icon name='shopping cart' />
            </Button>
        </Button>
    )

}

export default SmallCart