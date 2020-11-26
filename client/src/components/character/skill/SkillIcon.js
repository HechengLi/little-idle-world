import React from 'react'
import Styled from 'styled-components'

import { skillTypeReverseMap } from 'common-data'

const SkillIcon = ({ className, skill }) => {
  let type = skillTypeReverseMap[skill.type]

  return <div className={`${className} ${type}`}>
    <div className="icon">
      <img src={skill.image} alt={skill.name} />
    </div>
    <div className="mastery">{skill.mastery}</div>
    <div className="name">{skill.name}</div>
  </div>
}

const StyledSkillIcon = Styled(SkillIcon)`
  position: relative;
  width: 100px;
  height: 150px;
  margin: 20px;
  border: 1px solid #777;
  cursor: pointer;
  
  &.passive {
    border-color: var(--backup-color1);
    
    .icon {
      background-color: var(--backup-color1);
    }
    
    .mastery {
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
    
    .mastery {
      background-color: var(--backup-color2);
    }
    
    .name {
      color: var(--backup-color2);
    }
  }
  
  .icon {
    width: 100%;
    height: 100px;
    padding: 10px;
    flex-grow: 1;
    
    img {
      height: 100%;
    }
  }
  
  .mastery {
    height: 25px;
  }
  
  .name {
    height: 25px;
  }
`

export default StyledSkillIcon