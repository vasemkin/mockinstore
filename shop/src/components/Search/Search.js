import React from 'react'
import { Input } from 'semantic-ui-react'
import classes from './Search.module.css'

const Search = () => {

    return(

            <Input action='Поиск' className={classes.Search} fluid placeholder='Поиск...' />
        
        )}

export default Search