import React from 'react'
import styled from 'styled-components'

import WorldEntityListItem from './WorldEntityListItem'

const WorldEntityList = ({ className, entities }) => {
  return (
    <div className={className}>
      {
        entities.map(entity => <WorldEntityListItem key={entity.name} entity={entity} />)
      }
    </div>
  )
}

const StyledWorldEntityList = styled(WorldEntityList)`
  display: flex;
  flex-wrap: wrap;
`

export default StyledWorldEntityList