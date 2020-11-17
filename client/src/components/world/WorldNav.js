import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

const WorldNav = () => {
  const { url } = useRouteMatch()

  return (
    <nav>
      <ul>
        <li>
          <Link to={`${url}/slime_forest`}>史莱姆森林</Link>
        </li>
      </ul>
    </nav>
  )
}

const StyledWorldNav = styled(WorldNav)`
`

export default StyledWorldNav