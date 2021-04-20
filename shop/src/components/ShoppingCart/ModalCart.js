import React from 'react'
import { Button, Icon, Modal, Item, Divider, Header } from 'semantic-ui-react'
import Product from './Product/Product'
import { isCartModalOpened } from '../../store/actions/cartActions'
import { useDispatch } from 'react-redux'

const ModalCart = (props) => {

    const dispatch = useDispatch()
    const cart = props.cart
  
    function cartModalHandler() {
      dispatch(isCartModalOpened())
    }

    return (
        <Modal
        open={cart.modalOpen}
        >
            <Modal.Header>Корзина</Modal.Header>

            <Modal.Content scrolling>
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
                    
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={cartModalHandler} secondary>
                Закрыть <Icon name='times' />
                </Button>
                <Button primary>
                Оформить заказ <Icon name='chevron right' />
                </Button>
            </Modal.Actions>

        </Modal>
    )
}

export default ModalCart