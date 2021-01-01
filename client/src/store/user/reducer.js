import { UPDATE_USER_STATUS } from './action'

export default function userReducer(state = { status: false }, action) {
  switch(action.type) {
    case UPDATE_USER_STATUS:
      return Object.assign({}, state, action.payload)
    default: return state
  }
}
