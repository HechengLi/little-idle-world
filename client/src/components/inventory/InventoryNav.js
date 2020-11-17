import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

const InventoryNav = () => {
  const { url } = useRouteMatch()

  return (
    <nav>
      <ul>
        <li>
          <Link to={`${url}/equipment`}>装备</Link>
        </li>
        <li>
          <Link to={`${url}/use`}>消耗</Link>
        </li>
        <li>
          <Link to={`${url}/etc`}>其他</Link>
        </li>
      </ul>
    </nav>
  )
}

const StyledInventoryNav = styled(InventoryNav)`
`

export default StyledInventoryNav