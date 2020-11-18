import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

const SecondaryNav = ({ className, routes }) => {
  const { url } = useRouteMatch()

  return (
    <ul className={className}>
      {
        routes.map(route =>
          <li key={route.name}>
            <NavLink to={`${url}/${route.path}`} activeClassName="active">{route.name}</NavLink>
          </li>
        )
      }
    </ul>
  )
}

const StyledSecondaryNav = styled(SecondaryNav)`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid var(--secondary-color);
  
  a {
    display: block;
    padding: 10px 15px;
    transition: all 0.25s;
  
    &:not(.active):hover {
      box-shadow: 0 0 5px 0 var(--secondary-color) inset;
    }
  
    &.active {
      color: var(--white-color);
      background-color: var(--secondary-color);
    }
  }
`

export default StyledSecondaryNav