import { itemCategory } from 'common-data'
import test5 from '../../resource/images/test5.jpg'
import test6 from '../../resource/images/test6.jpg'

export default function inventoryReducer(
  state = [
    { name: '木剑', category: itemCategory.EQUIPMENT, image: test5 },
    { name: '木刀', category: itemCategory.EQUIPMENT, image: test6 }
  ],
  action
) {
  switch(action.type) {
    default:
      return state
  }
}