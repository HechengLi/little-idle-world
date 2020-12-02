import React from 'react'
import styled from 'styled-components'
import { Link, useRouteMatch } from 'react-router-dom'

import { entityCategory } from 'common-data/entity'

const WorldEntityListItem = ({ className, entity }) => {
  const { url } = useRouteMatch()
  let path = url + '/'
  switch(entity.category) {
    case entityCategory.MONSTER:
      path = path + 'monster'
      break
    case entityCategory.NPC:
      path = path + 'npc'
      break
    case entityCategory.ITEM:
      path = path + 'item'
      break
    default: break
  }
  
  return (
    <div className={`${className}`}>
      <Link className="icon" to={path}>
        <img src={entity.image} alt={entity.name} />
      </Link>
      <div className="name">{entity.name}</div>
    </div>
  )
}

const StyledWorldEntityListItem = styled(WorldEntityListItem)`
  position: relative;
  width: 100px;
  height: 120px;
  margin: 20px;
  cursor: pointer;
  padding-bottom: 25px;
  
  .icon {
    display: block;
    width: 100%;
    height: 100%;
    padding: 5px;
    flex-grow: 1;
    border: 1px solid #777;
    
    img {
      height: 100%;
    }
  }
  
  .name {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2px 0;
  }
`

export default StyledWorldEntityListItem