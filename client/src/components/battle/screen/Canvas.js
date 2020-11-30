import React from 'react'
import styled from 'styled-components'

const Canvas = ({ className }) => {
  return (
    <div className={className} />
  )
}

const StyledCanvas = styled(Canvas)`
  height: 100%;
  width: 100%;
`

export default StyledCanvas