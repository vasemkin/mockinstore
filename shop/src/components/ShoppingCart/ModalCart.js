import React from 'react'
import { Button, Icon, Modal, Item } from 'semantic-ui-react'
import Product from './Product/Product'

const ModalCart = (props) => {

    const cart = props.cart

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
            </Modal.Content>
            <Modal.Actions>
                <Button primary>
                Proceed <Icon name='chevron right' />
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalCart