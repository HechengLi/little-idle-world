import React from 'react'
import styled from 'styled-components'
import { NavLink, Redirect, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'

import SlimeForestTiles from './slimeForestTiles/slimeForestTiles'

const MapComponent = ({ className }) => {
  const { id } = useParams()

  const SlimeForestTile = SlimeForestTiles[`SlimeForestTile${id}`]

  return (
    <div className={className}>
      <SlimeForestTile />
    </div>
  )
}

const StyledMapComponent = styled(MapComponent)`
  flex-grow: 1;
  overflow: auto;
`

const SlimeForest = ({ className }) => {
  const { path, url } = useRouteMatch()

  return (
    // TODO: should have a general component for world
    <div className={className}>
      <ul>
        <li><NavLink to={`${url}/tile1`} activeClassName="active">tile 1</NavLink></li>
        <li><NavLink to={`${url}/tile2`} activeClassName="active">tile 2</NavLink></li>
        <li><NavLink to={`${url}/tile3`} activeClassName="active">tile 3</NavLink></li>
        <li><NavLink to={`${url}/tile4`} activeClassName="active">tile 4</NavLink></li>
        <li><NavLink to={`${url}/tile5`} activeClassName="active">tile 5</NavLink></li>
        <li><NavLink to={`${url}/tile6`} activeClassName="active">tile 6</NavLink></li>
        <li><NavLink to={`${url}/tile7`} activeClassName="active">tile 7</NavLink></li>
        <li><NavLink to={`${url}/tile8`} activeClassName="active">tile 8</NavLink></li>
      </ul>

      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/tile1`} />
        </Route>
        <Route path={`${path}/tile:id`} component={StyledMapComponent} />
      </Switch>
    </div>
  )
}

const StyledSlimeForest = styled(SlimeForest)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    li {
      margin: 5px 15px;
    }
  }
`

export default StyledSlimeForest
