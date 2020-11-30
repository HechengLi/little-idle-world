import React from 'react'
import styled from 'styled-components'

import Stat from './screen/Stat'
import Canvas from './screen/Canvas'

const Screen = ({ className }) => {
  return (
    <div className={className}>
      <Stat />
      <Stat reverse />
      <Canvas />
    </div>
  )
}

const StyledScreen = styled(Screen)`
  grid-area: screen;
  position: relative;
`

export default StyledScreen