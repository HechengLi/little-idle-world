import React from 'react'
import Styled from 'styled-components'

import * as skillType from '../../../resource/data/skillType'

const SkillIcon = ({ className, skill }) => {
  let type = ''
  switch(skill.type) {
    case skillType.PASSIVE:
      type = 'passive'
      break
    case skillType.ACTIVE:
      type = 'active'
      break
    default:
      type = ''
  }

  return <div className={`${className} ${type}`}>
    <div className="icon"></div>
    <div className="name">{skill.name}</div>
  </div>
}

const StyledSkillIcon = Styled(SkillIcon)`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  margin: 20px;
  border: 1px solid #777;
  cursor: pointer;
  
  &.passive {
    border-color: var(--backup-color1);
    
    .icon {
      background-color: var(--backup-color1);
    }
  }
  
  &.active {
    border-color: var(--backup-color2);
    
    .icon {
      background-color: var(--backup-color2);
    }
  }
  
  .icon {
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }
  
  .name {
    flex-grow: 0;
    padding: 5px 0;
  }
`

export default StyledSkillIcon