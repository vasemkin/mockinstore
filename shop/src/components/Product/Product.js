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


          <div className={classes.Product__flex}>
  
            <Header as='h5' className={classes.Product__price}>${product.price}</Header>
            
            <Breadcrumb>
              <Breadcrumb.Section>{product.department}</Breadcrumb.Section>
            </Breadcrumb>

          </div>

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