import React from 'react'
import { Button, Item, Icon } from 'semantic-ui-react'
import classes from '../ShoppingCart.module.css'

const Product = (props) => {

    const product = props.product
    console.log(product)

    return(

        <Item>
            <Item.Content>
                <Item.Header>{product.properties.productName}</Item.Header>
                <Item.Meta>
                <br />
                <span className='price'>${product.properties.price}</span>
                </Item.Meta>
                <div className={classes.Product__flex}>
                    <Button.Group>
                        <Button icon>
                            <Icon name='plus' />
                        </Button>
                        <Button icon>
                            <Icon name='minus' />
                        </Button>
                    </Button.Group>
  
                    <strong>Количество: {product.amount}</strong>
                </div>
            </Item.Content>
        </Item>

    )
}

export default Product