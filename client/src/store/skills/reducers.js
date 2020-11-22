import * as skillType from '../../resource/data/skillType'
import test3 from '../../resource/images/test3.jpg'
import test4 from '../../resource/images/test4.jpg'

export default function skillsReducer(
  state = {
    fist: {
      mastery: 100,
      skills: [
        { name: '基础拳法', type: skillType.PASSIVE, image: test3 },
        { name: '打击', type: skillType.ACTIVE, image: test4 }
      ]
    },
    sword: {
      mastery: 0,
      skills: []
    }
  },
  action
) {
  switch(action.type) {
    default:
      return state
  }
}