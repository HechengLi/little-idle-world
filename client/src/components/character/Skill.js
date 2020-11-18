import React, { useState } from 'react'
import styled from 'styled-components'

import SecondaryNav from '../SecondaryNav'
import * as skillType from '../../resource/data/skillType'
import SkillIcon from './skill/SkillIcon'

import test3 from '../../resource/images/test3.jpg'
import test4 from '../../resource/images/test4.jpg'

const tabs = [
  {
    name: '拳法',
    skills: [
      { name: '基础拳法', type: skillType.PASSIVE, image: test3 },
      { name: '打击', type: skillType.ACTIVE, image: test4 }
    ],
    mastery: 100
  },
  {
    name: '剑法',
    skills: [],
    mastery: 0
  }
]
const Skill = ({ className }) => {
  const [skillType, setSkillType] = useState(tabs[0])

  const onClick = skillType => {
    setSkillType(skillType)
  }

  return (
    <div className={className}>
      <SecondaryNav mode='tab' routes={tabs} active={skillType.name} onClick={onClick} />
      <p>修炼值: {skillType.mastery}</p>
      {
        skillType.skills.length === 0
        ? <p>未发现任何技能</p>
        : <div>
            {
              skillType.skills.map(skill =>
                <SkillIcon key={skill.name} skill={skill} />
              )
            }
          </div>
      }
    </div>
  )
}

const StyledSkill = styled(Skill)`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  & > div {
    height: 100%;
    display: flex;
  }
`

export default StyledSkill
