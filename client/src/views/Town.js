import React from 'react'
import styled from 'styled-components'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import BackButton from '../components/BackButton'
import TownNav from '../components/town/TownNav'
import Smithing from './town/Smithing'
import Hall from './town/Hall'
import Potion from './town/Potion'
import Training from './town/Training'
import NotFound from './NotFound'

const Town = () => {
  const { path, isExact } = useRouteMatch()

  return (
    <React.Fragment>
      { isExact ? null : <BackButton to={path} /> }
      <Switch>
        <Route exact path={path} component={TownNav} />
        <Route exact path={`${path}/hall`} component={Hall} />
        <Route exact path={`${path}/smith`} component={Smithing} />
        <Route exact path={`${path}/potion`} component={Potion} />
        <Route exact path={`${path}/training`} component={Training} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  )
}

const StyledTown = styled(Town)`
`

export default StyledTown
