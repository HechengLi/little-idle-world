import React from 'react'
import styled from 'styled-components'

const InventoryItem = ({ item }) => {
  if (!item) return <div>空</div>

  return (
    <div>{item.name}</div>
  )
}

const StyledInventoryItem = styled(InventoryItem)`
`

export default StyledInventoryItem