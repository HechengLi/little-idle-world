import React from 'react'
import styled from 'styled-components'

import WorldNav from '../components/world/WorldNav'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import SlimeForest from './world/SlimeForest'
import NotFound from './NotFound'

const World = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} component={WorldNav} />
      <Route exact path={`${path}/slime_forest`} component={SlimeForest} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

const StyledWorld = styled(World)`
`

export default StyledWorld
