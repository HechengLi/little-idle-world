import React from 'react'

import WorldView from '../../components/world/WorldView'
import slimeForestMapData from '../../resource/data/map/slimeForest'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

const SlimeForest = () => {
  const { url } = useRouteMatch()

  return (
    <Switch>
      <Route path={`${url}/:tile?`} render={() => <WorldView url={url} mapData={slimeForestMapData} />} />
    </Switch>
  )
}

export default SlimeForest
