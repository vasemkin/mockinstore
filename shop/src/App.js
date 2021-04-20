import React, { useEffect } from 'react'
import { Grid, Container, Segment, Card } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './store/actions/productActions'
import Product from './components/Product/Product'
import CardPlaceholder from './components/CardPlaceholder/CardPlaceholder'
import Sort from './components/Sort/Sort'
import Search from './components/Search/Search'
import SmallCart from './components/ShoppingCart/SmallCart'
import ModalCart from './components/ShoppingCart/ModalCart'
import classes from './App.module.css'

function App() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const cart = useSelector(state => state.cart)
  const productsFetching = useSelector(state => state.products.productsFetching)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (

      <Container>
        
        <ModalCart cart={cart}/>

        <Grid divided centered padded='vertically'>

          <Grid.Column width={4}>
            
            <SmallCart cart={cart}/>
            <Sort />  
            
          </Grid.Column>

          <Grid.Column width={12}>

            <Segment basic className={classes.App__container_main}>

              <Search />
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


          </Grid.Column>

        </Grid>

      </Container>

  );
}

export default App;