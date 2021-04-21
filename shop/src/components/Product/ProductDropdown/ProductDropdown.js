import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import cyrillicToTranslit from 'cyrillic-to-translit-js'

const ProductDropdown = (props) => {

    const options = props.colors.map((color, index) => {
        return {
            key : `${cyrillicToTranslit().transform(color)}_${index}`,
            text : color,
            value : cyrillicToTranslit().transform(color),
        }
    })

    return (
        <Dropdown
            placeholder='Цвет'
            fluid
            selection
            options={options}
        />
    )
}

export default ProductDropdown