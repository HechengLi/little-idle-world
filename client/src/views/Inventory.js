import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Redirect, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'

import SecondaryNav from '../components/SecondaryNav'
import { itemCategory, itemCategoryReverseMap } from 'common-data'
import InventoryItem from '../components/inventory/InventoryItem'

const InventoryView = ({ className, inventory }) => {
  const { inventoryType } = useParams()
  const selectedInventory = inventory[inventoryType]

  if (!selectedInventory) return <p>未知背包</p>

  return <div className={className}>
    {
      selectedInventory.map((item, i) =>
        <InventoryItem item={item} key={i} />
      )
    }
  </div>
}

const StyledInventoryView = styled(InventoryView)`
`

const routes = [
  { name: '装备', path: itemCategoryReverseMap[itemCategory.EQUIPMENT] },
  { name: '使用', path: itemCategoryReverseMap[itemCategory.USE] },
  { name: '其他', path: itemCategoryReverseMap[itemCategory.ETC] }
]

const Inventory = ({ inventory }) => {
  const { path } = useRouteMatch()

  const memoizedInventory = useMemo(() => {
    const inventoryFiltered = {}
    Object.values(itemCategory).forEach(key => {
      inventoryFiltered[itemCategoryReverseMap[key]] = []
    })
    inventory.forEach(item => {
      inventoryFiltered[itemCategoryReverseMap[item.category]].push(item)
    })
    return inventoryFiltered
  }, [inventory])

  return (
    <div>
      <SecondaryNav routes={routes} />
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/equipment`} />
        </Route>
        <Route path={`${path}/:inventoryType`} render={ () => <StyledInventoryView inventory={memoizedInventory} /> } />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  inventory: state.inventory
})

const StyledInventory = styled(Inventory)`
`

export default connect(
  mapStateToProps
)(StyledInventory)
