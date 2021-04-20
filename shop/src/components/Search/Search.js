import React, { useState }from 'react'
import { Input } from 'semantic-ui-react'
import classes from './Search.module.css'
import { getProducts } from '../../store/actions/productActions'
import { useDispatch } from 'react-redux'

const Search = () => {
 
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()

    function searchHandler() {
        dispatch(getProducts('desc', searchValue))
    }

    return(

            <Input 
            action={{
                content : 'Поиск',
                onClick: () => searchHandler()
            }} 
            value={searchValue} 
            onChange={(e) => setSearchValue(e.target.value)} 
            className={classes.Search} fluid placeholder='Поиск...' 
            />
        
        )}

export default Search