import React from 'react'
import styled from 'styled-components'

import Map from '../Map'
import WorldEntityList from './entity/WorldEntityList'
import { useParams } from 'react-router-dom'

const WorldView = ({ className, url, mapData }) => {
  const { tile } = useParams()
  const selectedTile = mapData[tile || 'entrance']
  const routes = selectedTile.path.map(tile => ({
    ...tile,
    link: tile.link ? `${url}/${tile.link}` : url
  }))

  return (
    <div className={className}>
      <WorldEntityList className="entities" entities={selectedTile.entities} />
      <Map className="map" routes={routes} />
    </div>
  )
}

const StyledWorldView = styled(WorldView)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  .entities {
    height: 50%;
    width: 100%;
  }
  
  .map {
    flex-grow: 1;
  }
`

export default StyledWorldView