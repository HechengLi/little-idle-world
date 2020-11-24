import React from 'react'
import styled from 'styled-components'

const InventoryItem = ({ className, item }) => {
  return (
    <div className={`${className}`}>
      <div className="icon">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="name">{item.name}</div>
    </div>
  )
}

const StyledInventoryItem = styled(InventoryItem)`
  position: relative;
  width: 100px;
  height: 120px;
  margin: 20px;
  cursor: pointer;
  padding-bottom: 25px;
  
  .icon {
    width: 100%;
    height: 100%;
    padding: 5px;
    flex-grow: 1;
    border: 1px solid #777;
    
    img {
      height: 100%;
    }
  }
  
  .name {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2px 0;
  }
`

export default StyledInventoryItem