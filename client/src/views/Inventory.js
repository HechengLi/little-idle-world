import React from 'react'
import styled from 'styled-components'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'

import InventoryNav from '../components/inventory/InventoryNav'
import Equipment from './inventory/Equipment'
import Use from './inventory/Use'
import Etc from './inventory/Etc'
import NotFound from './NotFound'

const Inventory = () => {
  const { path } = useRouteMatch()

  return (
    <div>
      <InventoryNav />
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/equipment`} />
        </Route>
        <Route exact path={`${path}/equipment`} component={Equipment} />
        <Route exact path={`${path}/use`} component={Use} />
        <Route exact path={`${path}/etc`} component={Etc} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

const StyledInventory = styled(Inventory)`
`

export default StyledInventory
