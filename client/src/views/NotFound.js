import React from 'react'
import styled from 'styled-components'

const NotFound = ({ className }) => {
  return (
    <div className={className}>404 Not Found</div>
  )
}

const StyledNotFound = styled(NotFound)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StyledNotFound
