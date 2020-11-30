import React from 'react'
import styled from 'styled-components'

const Action = ({ className }) => {
  return (
    <div className={className}>
      <button>确定</button>
      <button>逃跑</button>
    </div>
  )
}

const StyledAction = styled(Action)`
  grid-area: action;
`

export default StyledAction