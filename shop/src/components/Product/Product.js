import React from 'react'
import { Card, Button, Image, Container, Header, Breadcrumb } from 'semantic-ui-react'
import classes from './Product.module.css'
import { addProduct } from '../../store/actions/cartActions'
import { useDispatch } from 'react-redux'
import ProductDropdown from './ProductDropdown/ProductDropdown'

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

          <Breadcrumb className={classes.Product__breadcrumb}>
            <Breadcrumb.Section>{product.department}</Breadcrumb.Section>
          </Breadcrumb>

          <Card.Description>
              {product.productDescription}
          </Card.Description>

          <Header as='h5'>${product.price}</Header>

          <Container>
            <ProductDropdown product={product}/>
          </Container>

      </Card.Content>

      <Card.Content extra>

          <Button fluid onClick={addProductHandler}>
              Добавить
          </Button>

      </Card.Content>

    </Card>
)}

export default Product