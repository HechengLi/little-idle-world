import React from 'react'
import styled from 'styled-components'

import Attribute from '../components/character/Attribute'
import Skill from '../components/character/Skill'

const Character = ({ className }) => {
  return (
    <div className={className}>
      <Attribute />
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
