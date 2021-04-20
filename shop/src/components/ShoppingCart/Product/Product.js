import React from 'react'
import { Button, Item, Icon } from 'semantic-ui-react'
import classes from '../ShoppingCart.module.css'
import { addProduct, removeProduct } from '../../../store/actions/cartActions'
import { useDispatch } from 'react-redux'

const Product = (props) => {

    const dispatch = useDispatch()
    const product = props.product
  
    function addProductHandler() {
      dispatch(addProduct(product.properties))
    }
  
    function removeProductHandler() {
      dispatch(removeProduct(product.properties))
    }

    return(

        <Item>

            <Item.Content>

                <div className={classes.Product__flex}>
                    <Item.Header>{product.properties.productName}</Item.Header>
                    <Item.Meta>
                    <span className='price'>${product.properties.price}</span>
                    </Item.Meta>
                </div>

                <div className={classes.Product__flex}>

                    <Button.Group>
                        <Button icon onClick={addProductHandler}>
                            <Icon name='plus' />
                        </Button>
                        <Button icon onClick={removeProductHandler}>
                            <Icon name='minus' />
                        </Button>
                    </Button.Group>
  
                    <p>Количество: {product.amount}</p>

                </div>

            </Item.Content>

        </Item>

    )
}

export default Product