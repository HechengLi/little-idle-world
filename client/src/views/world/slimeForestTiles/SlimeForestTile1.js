import React from 'react'
import styled from 'styled-components'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Battle from '../../../components/battle/Battle'

const SlimeForestTile1 = () => {
  const { url, path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <ul>
          <li><Link to={`${url}/battle`}>Slime</Link></li>
        </ul>
      </Route>
      <Route path={`${path}/battle`} component={Battle} />
    </Switch>
  )
}

const StyledSlimeForestTile1 = styled(SlimeForestTile1)`
`

export default StyledSlimeForestTile1