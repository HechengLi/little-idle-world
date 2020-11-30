import React from 'react'
import styled from 'styled-components'

import plus from '../../../resource/images/plus.png'

const ListItem = ({ className }) => {
  return (
    <div className={className}>
      <img className="icon" src={plus} alt="add" />
    </div>
  )
}

const StyledListItem = styled(ListItem)`
  height: 80px;
  width: 80px;
  display: inline-block;
  border: 1px solid var(--backup-color2);
  margin-right: 10px;
  cursor: pointer;
  
  .icon {
    height: 100%;
    width: 100%;
  }
`

export default StyledListItem