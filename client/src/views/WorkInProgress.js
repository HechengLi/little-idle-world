import React from 'react'
import styled from 'styled-components'

const WorkInProgress = ({ className }) => {
  return (
    <div className={className}>施工中...</div>
  )
}

const StyledWorkInProgress = styled(WorkInProgress)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StyledWorkInProgress
