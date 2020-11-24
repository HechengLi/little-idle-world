import React from 'react'
import Styled from 'styled-components'

import skillTypeReverseMap from '../../../resource/data/skillTypeReverseMap'

const SkillIcon = ({ className, skill }) => {
  let type = skillTypeReverseMap[skill.type]

  return <div className={`${className} ${type}`}>
    <div className="icon">
      <img src={skill.image} alt={skill.name} />
    </div>
    <div className="name">{skill.name}</div>
  </div>
}

const StyledSkillIcon = Styled(SkillIcon)`
  position: relative;
  width: 100px;
  height: 120px;
  margin: 20px;
  border: 1px solid #777;
  cursor: pointer;
  padding-bottom: 25px;
  
  &.passive {
    border-color: var(--backup-color1);
    
    .icon {
      background-color: var(--backup-color1);
    }
    
    .name {
      color: var(--backup-color1);
    }
  }
  
  &.active {
    border-color: var(--backup-color2);
    
    .icon {
      background-color: var(--backup-color2);
    }
    
    .name {
      color: var(--backup-color2);
    }
  }
  
  .icon {
    width: 100%;
    height: 100%;
    padding: 5px;
    flex-grow: 1;
    
    img {
      height: 100%;
    }
  }
  
  .name {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2px 0;
  }
`

export default StyledSkillIcon