import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'semantic-ui-react'
import { setCurrentPage } from '../../store/actions/productActions'

const CardsPagination = (props) => {

  const dispatch = useDispatch()
  const pagination = props.pagination

  return(
    <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={10}
        onPageChange={(event, data) => dispatch(setCurrentPage(data.activePage))}
    />
  )}

export default CardsPagination