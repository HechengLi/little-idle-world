import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import Map from '../Map'

const WorldNav = () => {
  const { url } = useRouteMatch()
  const routes = [
    { x: 0.5, y: 0.5, height: 0.1, width: 0.1, type: 'percentage', text: '史莱姆森林', link: `${url}/slime_forest` }
  ]

  return (
    <Map routes={routes} />
  )
}

const StyledWorldNav = styled(WorldNav)`
`

export default StyledWorldNav