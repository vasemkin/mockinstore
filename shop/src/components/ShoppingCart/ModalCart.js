import React from 'react'
import { Button, Modal, Item, Divider, Header, Container } from 'semantic-ui-react'
import Product from './Product/Product'
import Order from './Order/Order'
import { isCartModalOpened, isOrderShown } from '../../store/actions/cartActions'
import { isOrderCompleted } from '../../store/actions/orderActions'
import { useDispatch } from 'react-redux'

const ModalCart = (props) => {

    const dispatch = useDispatch()
    const cart = props.cart
    const orders = props.orders
  
    function cartModalHandler() {
        dispatch(isOrderCompleted(false))
        dispatch(isCartModalOpened())
    }
  
    function showOrderHandler() {
        dispatch(isOrderCompleted(false))
        dispatch(isOrderShown())
    }

    return (
        <Modal
        open={cart.modalOpen}
        >
            <Modal.Header>{!cart.isOrderShown ? 'Корзина' : 'Заказ'}</Modal.Header>

            <Modal.Content scrolling>

                    {!cart.isOrderShown 
                    ?
                    <Container>

                        {cart.totalItems === 0 
                        ? <p>Корзина пуста</p>
                        :   <Item.Group divided>
                                {
                                    Object.keys(cart.selected).map((product, index) => {
                                        return(
                                            <Product key={`cardProduct${index}`} product={cart.selected[product]}/>
                                        )
                                    })
                                }
                            </Item.Group>
                        }

                        <Divider></Divider>

                        <Header as="h3">Итого: ${cart.totalCost}</Header>

                    </Container>
                    :
                    <Order selected={cart.selected} orders={orders} />
                    }


                    
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={cartModalHandler} secondary>
                Закрыть
                </Button>
                <Button onClick={showOrderHandler} primary>
                {!cart.isOrderShown ? 'Оформить заказ' : 'Назад в корзину'}
                </Button>
            </Modal.Actions>

        </Modal>
    )
}

export default ModalCart