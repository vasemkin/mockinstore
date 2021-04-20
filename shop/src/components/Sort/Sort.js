import React from 'react'
import { Menu } from 'semantic-ui-react'
import classes from './Sort.module.css'

const Sort = () => {

    return(
        <Menu text vertical className={classes.Sort__menu}>
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

export default Sort