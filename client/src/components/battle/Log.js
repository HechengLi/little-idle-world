import React from 'react'
import styled from 'styled-components'

const Log = ({ className }) => {
  return (
    <div className={className}>
      <p>dealt 10 damage to x</p>
      <p>received 10 damage from x</p>
    </div>
  )
}

const StyledLog = styled(Log)`
  grid-area: log;
  text-align: left;
  padding: 10px;
  display: block;
  margin: 0 0 10px;
  line-height: 1.42857143;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
  color: #333;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  p {
    margin: 0;
  }
`

export default StyledLog