import React from 'react'
import styled from 'styled-components'

const Stat = ({ className, reverse }) => {
  const hpTransform = `translateX(${reverse ? '-' : ''}20%)`
  const mpTransform = `translateX(${reverse ? '-' : ''}10%)`

  return (
    <div className={`${className} ${reverse ? '' : 'reverse'}`}>
      <div className="bar_max hp">
        <div className="bar_text">80/100</div>
        <div className="bar_current" style={{ transform: hpTransform }} />
      </div>
      <div className="bar_max mp">
        <div className="bar_text">90/100</div>
        <div className="bar_current" style={{ transform: mpTransform }} />
      </div>
    </div>
  )
}

const StyledStat = styled(Stat)`
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  right: 50%;
  
  &.reverse {
    right: 0;
    left: 50%;
    
    .bar_max {
      text-align: right;
      
      .bar_text {
        left: unset;
        right: 15px;
      }
    }
  }
  
  .bar_max {
    position: relative;
    height: 20px;
    line-height: 20px;
    text-align: left;
    overflow: hidden;
    background-color: #777;
    
    &.mp {
      .bar_current {
        background-color: var(--primary-color);
      }
    }
    
    .bar_text {
      position: absolute;
      z-index: 1;
      left: 15px;
      top: 0;
    }
    
    .bar_current {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--backup-color1);
      top: 0;
    }
  }
`

export default StyledStat