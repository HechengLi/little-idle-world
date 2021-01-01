import { skillType, skillCategory } from 'common-data/skill'
import test3 from '../../resource/images/test3.jpg'
import test4 from '../../resource/images/test4.jpg'

export default function skillsReducer(
  state = [
    { name: '基础拳法', category: skillCategory.FIST, type: skillType.PASSIVE, mastery: 100, image: test3 },
    { name: '打击', category: skillCategory.FIST, type: skillType.ACTIVE, mastery: 10, image: test4 }
  ],
  action
) {
  switch(action.type) {
    default:
      return state
  }
}