import React from 'react'
import styled from 'styled-components'

import Basic from '../components/character/Basic'
import Skill from '../components/character/Skill'

const Character = ({ className }) => {
  return (
    <div className={className}>
      <Basic />
      <Skill />
    </div>
  )
}

const StyledCharacter = styled(Character)`
  display: flex;
  
  & > div {
    flex-grow: 1;
  }
`

export default StyledCharacter
