import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

const TownNav = () => {
  const { url } = useRouteMatch()

  return (
    <nav>
      <ul>
        <li>
          <Link to={`${url}/hall`}>大厅</Link>
        </li>
        <li>
          <Link to={`${url}/weapon_shop`}>武器店</Link>
        </li>
        <li>
          <Link to={`${url}/armor_shop`}>防具店</Link>
        </li>
        <li>
          <Link to={`${url}/potion_shop`}>药水店</Link>
        </li>
        <li>
          <Link to={`${url}/training`}>练功房</Link>
        </li>
      </ul>
    </nav>
  )
}

const StyledTownNav = styled(TownNav)`
`

export default StyledTownNav