import React from 'react'
import styled from 'styled-components'
import SecondaryNav from '../SecondaryNav'

const routes = [
  { name: '属性', path: 'attribute' },
  { name: '技能', path: 'skill' }
]

const CharacterNav = () => {
  return (
    <SecondaryNav routes={routes} />
  )
}

const StyledCharacterNav = styled(CharacterNav)`
`

export default StyledCharacterNav