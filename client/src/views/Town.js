import React from 'react'
import styled from 'styled-components'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import BackButton from '../components/BackButton'
import TownNav from '../components/town/TownNav'
import WeaponShop from './town/WeaponShop'
import ArmorShop from './town/ArmorShop'
import Hall from './town/Hall'
import PotionShop from './town/PotionShop'
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
        <Route exact path={`${path}/weapon_shop`} component={WeaponShop} />
        <Route exact path={`${path}/armor_shop`} component={ArmorShop} />
        <Route exact path={`${path}/potion_shop`} component={PotionShop} />
        <Route exact path={`${path}/training`} component={Training} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  )
}

const StyledTown = styled(Town)`
`

export default StyledTown
