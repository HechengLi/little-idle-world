export const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'

export const updateUserStatus = status => {
  return {
    type: UPDATE_USER_STATUS,
    payload: { status }
  }
}
