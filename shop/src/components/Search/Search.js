import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'
import classes from './Search.module.css'
import { getProducts, setCurrentPage } from '../../store/actions/productActions'
import { useDispatch } from 'react-redux'

const Search = (props) => {
    
    const pagination = props.pagination
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()

    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getProducts('desc', searchValue, pagination.currentPage, pagination.perPage))
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