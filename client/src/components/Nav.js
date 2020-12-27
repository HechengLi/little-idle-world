import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <NavLink to="/town" activeClassName="active">宗门</NavLink>
        </li>
        <li>
          <NavLink to="/character" activeClassName="active">人物</NavLink>
        </li>
        <li>
          <NavLink to="/world" activeClassName="active">世界</NavLink>
        </li>
        <li>
          <NavLink to="/inventory" activeClassName="active">背包</NavLink>
        </li>
        <li>
          <NavLink to="/setting" activeClassName="active">设置</NavLink>
        </li>
      </ul>
    </nav>
  )
}

const StyledNav = styled(Nav)`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  border-top: 1px solid var(--primary-color);
  
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    
    li {
      width: 100%;
      
      a {
        display: block;
        padding: 15px 25px;
        color: var(--primary-color);
        background-color: var(--white-color);
        transition: all 0.25s;
        
        &:not(.active):hover {
          box-shadow: 0 0 5px 0 var(--primary-color) inset;
        }
        
        &.active {
          color: var(--white-color);
          background-color: var(--primary-color);
        }
      }
    }
  }
`

export default StyledNav
