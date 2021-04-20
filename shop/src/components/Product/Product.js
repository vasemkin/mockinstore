import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
import classes from './Product.module.css'
import { addProduct } from '../../store/actions/cartActions'
import { useDispatch } from 'react-redux'

const Product = (props) => {

  const dispatch = useDispatch()
  const product = props.product

  function addProductHandler() {
    dispatch(addProduct(product))
  }

  return (
    <Card>

      <Card.Content>
        
            <Image
              size='medium'
              rounded
              className={classes.Product__image}
              src={product.image}
            />

          <Card.Header className={classes.Product__header}>{product.productName}</Card.Header>

          <Card.Description>
              {product.productDescription}
          </Card.Description>

          {/* id : n,
                productName : faker.commerce.productName(),
                price : faker.commerce.price(),
                department : faker.commerce.department(),
                color : faker.commerce.color(),
                productMaterial : faker.commerce.productMaterial(),
                productDescription : faker.commerce.productDescription(),
                image : `${faker.image.abstract()}?random=${Date.now()}`,
                purchased : faker.datatype.number() */}

      </Card.Content>

      <Card.Content extra>

          <Button fluid onClick={addProductHandler}>
              Добавить
          </Button>

      </Card.Content>

    </Card>
)}

export default Product