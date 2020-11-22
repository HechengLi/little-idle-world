import React, { useState } from 'react'
import styled from 'styled-components'

import SecondaryNav from '../components/SecondaryNav'
import test5 from '../resource/images/test5.jpg'
import test6 from '../resource/images/test6.jpg'

const tabs = [
  {
    name: '装备',
    skills: [
      { name: '基础拳法', image: test5 },
      { name: '打击', image: test6 }
    ],
    mastery: 100
  },
  {
    name: '消耗',
    skills: [],
    mastery: 0
  },
  {
    name: '其他',
    skills: [],
    mastery: 0
  }
]

const Inventory = () => {
  const [skillType, setSkillType] = useState(tabs[0])
  const onClick = skillType => {
    setSkillType(skillType)
  }

  return (
    <div>
      <SecondaryNav mode='tab' routes={tabs} active={skillType.name} onClick={onClick} />
    </div>
  )
}

const StyledInventory = styled(Inventory)`
`

export default StyledInventory
