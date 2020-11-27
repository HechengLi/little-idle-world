import React from 'react'
import styled from 'styled-components'

import WorldNav from '../components/world/WorldNav'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import SlimeForest from './world/SlimeForest'
import NotFound from './NotFound'
import BackButton from '../components/BackButton'

const World = () => {
  const { path, isExact } = useRouteMatch()

  return (
    <React.Fragment>
      { isExact ? null : <BackButton to={path} /> }
      <Switch>
        <Route exact path={path} component={WorldNav} />
        <Route path={`${path}/slime_forest`} component={SlimeForest} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  )
}

const StyledWorld = styled(World)`
`

export default StyledWorld
