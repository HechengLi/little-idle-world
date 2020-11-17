import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

const CharacterNav = () => {
  const { url } = useRouteMatch()

  return (
    <nav>
      <ul>
        <li>
          <Link to={`${url}/attribute`}>属性</Link>
        </li>
        <li>
          <Link to={`${url}/skill`}>技能</Link>
        </li>
      </ul>
    </nav>
  )
}

const StyledCharacterNav = styled(CharacterNav)`
`

export default StyledCharacterNav