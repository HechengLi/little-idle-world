import React from 'react'
import styled from 'styled-components'

import Screen from './Screen'
import Log from './Log'
import ItemList from './ItemList'
import SkillList from './SkillList'
import Action from './Action'

const Battle = ({ className }) => {
  return (
    <div className={className}>
      <Screen />
      <ItemList />
      <SkillList />
      <Log />
      <Action />
    </div>
  )
}

const StyledBattle = styled(Battle)`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-template-rows: 40% 100px auto 40px;
  grid-template-areas:
    "screen screen"
    "item skill"
    "log log"
    "action action"
`

export default StyledBattle