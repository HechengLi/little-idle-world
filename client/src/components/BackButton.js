import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BackButton = (props) => {
  return <Link {...props}>{'<'}</Link>
}

const StyledBackButton = styled(BackButton)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
`

export default StyledBackButton