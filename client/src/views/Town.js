import React from 'react'
import styled from 'styled-components'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import BackButton from '../components/BackButton'
import Smithing from './town/Smithing'
import Hall from './town/Hall'
import Potion from './town/Potion'
import Training from './town/Training'
import NotFound from './NotFound'
import Map from '../components/Map'

import { createImage } from '../resource/plugins/helpers'
import test1 from '../resource/images/test1.jpg'
import test2 from '../resource/images/test2.jpg'

const Town = () => {
  const { url, path, isExact } = useRouteMatch()
  const routes = [
    { x: 0.5, y: 0.5, height: 0.1, width: 0.1, type: 'percentage', text: '大厅', link: `${url}/hall` },
    { x: 0.2, y: 0.4, height: 0.1, width: 0.1, type: 'percentage', text: '炼器', link: `${url}/smith`, image: createImage(test1) },
    { x: 0.35, y: 0.4, height: 0.1, width: 0.1, type: 'percentage', text: '炼药', link: `${url}/potion`, image: createImage(test2) },
    { x: 0.7, y: 0.3, height: 0.1, width: 0.1, type: 'percentage', text: '练功', link: `${url}/training` }
  ]

  return (
    <React.Fragment>
      { isExact ? null : <BackButton to={path} /> }
      <Switch>
        <Route exact path={path} render={() => <Map routes={routes} />} />
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
