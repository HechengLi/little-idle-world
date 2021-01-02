import { UPDATE_REQUEST_STATUS } from './action'

export default function userReducer(state = { status: 0 }, action) {
  switch(action.type) {
    case UPDATE_REQUEST_STATUS:
      return Object.assign({}, state, action.payload)
    default: return state
  }
}
