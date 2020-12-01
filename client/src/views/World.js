import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import SlimeForest from './world/SlimeForest'
import NotFound from './NotFound'
import BackButton from '../components/BackButton'
import Map from '../components/Map'

const World = () => {
  const { url, path, isExact } = useRouteMatch()
  const routes = [
    { x: 0.5, y: 0.5, height: 0.1, width: 0.1, type: 'percentage', text: '史莱姆森林', link: `${url}/slime_forest` }
  ]

  return (
    <React.Fragment>
      { isExact ? null : <BackButton to={path} /> }
      <Switch>
        <Route exact path={path} render={() => <Map routes={routes} />} />
        <Route path={`${path}/slime_forest`} component={SlimeForest} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  )
}

const StyledWorld = styled(World)`
`

export default StyledWorld
