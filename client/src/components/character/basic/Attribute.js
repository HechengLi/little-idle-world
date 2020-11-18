import React from 'react'
import styled from 'styled-components'

const Attribute = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td align="left"><b>生命</b></td>
          <td align="right">100</td>
        </tr>
        <tr>
          <td align="left"><b>真气</b></td>
          <td align="right">100</td>
        </tr>
        <tr>
          <td align="left"><b>攻击</b></td>
          <td align="right">10</td>
        </tr>
        <tr>
          <td align="left"><b>防御</b></td>
          <td align="right">10</td>
        </tr>
        <tr>
          <td align="left"><b>速度</b></td>
          <td align="right">10</td>
        </tr>
      </tbody>
    </table>
  )
}

const StyledAttribute = styled(Attribute)`
`

export default StyledAttribute
