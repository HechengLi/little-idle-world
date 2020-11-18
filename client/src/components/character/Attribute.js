import React from 'react'
import styled from 'styled-components'

const Attribute = ({ className }) => {
  return (
    <div className={className}>
      <table>
        <tbody>
          <tr>
            <td align="left"><b>血量</b></td>
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
    </div>
  )
}

const StyledAttribute = styled(Attribute)`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  border-right: 1px solid var(--secondary-color);
`

export default StyledAttribute
