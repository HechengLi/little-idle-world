import React from 'react'
import styled from 'styled-components'

import ListItem from './listItem/ListItem'

const ItemList = ({ className }) => {
  return (
    <div className={className}>
      <ListItem />
      <ListItem />
    </div>
  )
}

const StyledItemList = styled(ItemList)`
  grid-area: item;
  text-align: left;
`

export default StyledItemList