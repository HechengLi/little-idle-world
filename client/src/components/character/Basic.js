import React from 'react'
import Styled from 'styled-components'

import Level from './basic/Level'
import Attribute from './basic/Attribute'

const Basic = ({ className }) => {
  return (
    <div className={className}>
      <Level />
      <Attribute />
    </div>
  )
}

const StyledBasic = Styled(Basic)`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  border-right: 1px solid var(--secondary-color);
`

export default StyledBasic