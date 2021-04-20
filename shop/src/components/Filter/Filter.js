import React from 'react'
import { Menu } from 'semantic-ui-react'
import classes from './Filter.module.css'

const Filter = () => {

    return(
        <Menu text vertical className={classes.Filter__menu}>
            <Menu.Item header>Сортировать</Menu.Item>
            <Menu.Item
                name='Цена'
            />
            <Menu.Item
                name='Полуярность'
            />
        </Menu>
    )

}

export default Filter