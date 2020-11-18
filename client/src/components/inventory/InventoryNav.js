import React from 'react'
import styled from 'styled-components'
import SecondaryNav from '../SecondaryNav'

const routes = [
  { name: '装备', path: 'equipment' },
  { name: '消耗', path: 'use' },
  { name: '其他', path: 'etc' }
]

const InventoryNav = () => {
  return (
    <SecondaryNav routes={routes} />
  )
}

const StyledInventoryNav = styled(InventoryNav)`
`

export default StyledInventoryNav