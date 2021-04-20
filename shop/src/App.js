import React, { useEffect } from 'react'
import { Grid, Container, Segment, Card } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './store/actions/actions'
import Product from './components/Product/Product'
import Filter from './components/Filter/Filter'
import classes from './App.module.css'

function App() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (

      <Container>

        <Grid divided centered padded='vertically'>

          <Grid.Column width={4}>
            <Filter />  
          </Grid.Column>

          <Grid.Column width={12}>

            <Segment basic className={classes.App__container_main}>

              <Card.Group itemsPerRow={3}>

                {
                  products.map (product => { 
                    return (<Product product={product} />)
                  })
                }

              </Card.Group>

            </Segment>


          </Grid.Column>

        </Grid>

      </Container>

  );
}

export default App;