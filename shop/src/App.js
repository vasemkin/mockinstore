import React, { useEffect } from 'react'
import { Grid, Container, Segment, Card } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './store/actions/productActions'
import Product from './components/Product/Product'
import CardPlaceholder from './components/CardPlaceholder/CardPlaceholder'
import Search from './components/Search/Search'
import CardsPagination from './components/CardsPagination/CardsPagination'
import SmallCart from './components/ShoppingCart/SmallCart'
import ModalCart from './components/ShoppingCart/ModalCart'
import classes from './App.module.css'

function App() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const cart = useSelector(state => state.cart)
  const searchValue = useSelector(state => state.products.searchValue)
  const orders = useSelector(state => state.orders)
  const pagination = useSelector(state => state.products.pagination)
  const productsFetching = useSelector(state => state.products.productsFetching)

  useEffect(() => {
    dispatch(getProducts(products.order, searchValue, pagination.currentPage, pagination.perPage))
  }, [pagination.currentPage, searchValue])

  return (

      <Container>
        
        <ModalCart cart={cart} orders={orders}/>

        <Segment basic className={classes.App__container_main}>

          <div className={classes.App__sticky}>

            <Search pagination={pagination}/>

            <div className={classes.App__flex}>

              <CardsPagination pagination={pagination} />
              <SmallCart cart={cart}/>

            </div>

          </div>

          { productsFetching 
          
          ? <Grid columns={3} stackable>

            {
              [1,2,3,4,5,6].map((an, index) => {
                return(
                  <CardPlaceholder key={`placeholder${index}`}/>
                )
              }) 
            }

            </Grid>

          : <Card.Group itemsPerRow={3}>

            {
              products.map((product) => { 
                return (<Product product={product} key={product.id}/>)
              })
            }

            </Card.Group>    
          }

        </Segment>


      </Container>

  );
}

export default App;