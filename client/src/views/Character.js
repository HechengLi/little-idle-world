import React from 'react'
import styled from 'styled-components'

import CharacterNav from '../components/character/CharacterNav'
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom'
import Attribute from './character/Attribute'
import Skill from './character/Skill'
import NotFound from './NotFound'

const Character = () => {
  const { path } = useRouteMatch()

  return (
    <div>
      <CharacterNav />
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/attribute`} />
        </Route>
        <Route exact path={`${path}/attribute`} component={Attribute} />
        <Route exact path={`${path}/skill`} component={Skill} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

const StyledCharacter = styled(Character)`
`

export default StyledCharacter
