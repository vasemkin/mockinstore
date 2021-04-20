import React from 'react'
import { Grid, Placeholder, Segment } from 'semantic-ui-react'

const CardPlaceholder = () => {
    return(
        <Grid.Column>
            <Segment>
                <Placeholder>
                    <Placeholder.Image square />
                    <Placeholder.Header>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
            </Segment>
        </Grid.Column>
    )
}

export default CardPlaceholder