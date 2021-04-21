import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeProductColor } from '../../../store/actions/productActions'
import { Dropdown } from 'semantic-ui-react'
import cyrillicToTranslit from 'cyrillic-to-translit-js'

const ProductDropdown = (props) => {

    const product = props.product
    const dispatch = useDispatch()
    const [dropdownValue, setdropdownValue] = useState(product.defaultColor)

    const options = product.colors.map((color, index) => {
        return {
            key : `${cyrillicToTranslit().transform(color)}_${index}`,
            text : color,
            value : index,
        }
    })

    function dropdownChange(e, {value}) {
        dispatch(changeProductColor(product.id, dropdownValue))
        setdropdownValue(value)
    }

    return (
        <Dropdown
            placeholder='Цвет'
            fluid
            selection
            onChange={(e, { value }) => dropdownChange(e, { value })}
            options={options}
            value={dropdownValue}
        />
    )
}

export default ProductDropdown