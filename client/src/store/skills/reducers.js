import * as skillType from '../../resource/data/skillType'
import * as skillCategory from '../../resource/data/skillCategory'
import test3 from '../../resource/images/test3.jpg'
import test4 from '../../resource/images/test4.jpg'

export default function skillsReducer(
  state = {
    list: [
      { name: '基础拳法', category: skillCategory.FIST, type: skillType.PASSIVE, image: test3 },
      { name: '打击', category: skillCategory.FIST, type: skillType.ACTIVE, image: test4 }
    ],
    mastery: {
      [skillCategory.FIST]: 100,
      [skillCategory.SWORD]: 0
    }
  },
  action
) {
  switch(action.type) {
    default:
      return state
  }
}