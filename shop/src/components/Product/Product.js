import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
import classes from './Product.module.css'

const Product = (props) => {

  const product = props.product

  return (
    <Card>

      <Card.Content>
        
            <Image
              size='medium'
              rounded
              className={classes.Product__image}
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />

          <Card.Header>{product.productName}</Card.Header>

          <Card.Description>
              {product.description}
          </Card.Description>

      </Card.Content>

      <Card.Content extra>

          <Button fluid>
              Добавить
          </Button>

      </Card.Content>

    </Card>
)}

export default Product