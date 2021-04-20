import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const ShoppingCart = () => {
    return(
        <Button as='div' labelPosition='left'>
            <Label as='a' basic>
                2,048
            </Label>
            <Button icon>
                <Icon name='shopping cart' />
            </Button>
        </Button>
    )
}

export default ShoppingCart