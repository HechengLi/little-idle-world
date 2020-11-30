import React from 'react'
import styled from 'styled-components'

import ListItem from './listItem/ListItem'

const SkillList = ({ className }) => {
  return (
    <div className={className}>
      <ListItem />
    </div>
  )
}

const StyledSkillList = styled(SkillList)`
  grid-area: skill;
  text-align: left;
`

export default StyledSkillList