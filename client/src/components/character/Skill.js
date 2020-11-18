import React from 'react'
import styled from 'styled-components'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'

import SecondaryNav from '../SecondaryNav'
import Fist from './skill/Fist'
import Sword from './skill/Sword'
import NotFound from '../../views/NotFound'

const routes = [
  { name: '拳修', path: 'fist' },
  { name: '剑修', path: 'sword' }
]
const Skill = ({ className }) => {
  const { path } = useRouteMatch()

  return (
    <div className={className}>
      <SecondaryNav routes={routes} />
      <Switch>
        <Route exact path={path}><Redirect to={`${path}/fist`} /></Route>
        <Route exact path={`${path}/fist`} component={Fist} />
        <Route exact path={`${path}/sword`} component={Sword} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

const StyledSkill = styled(Skill)`
  width: 100%;
`

export default StyledSkill
