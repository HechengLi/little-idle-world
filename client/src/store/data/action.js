import $request from '../../resource/plugins/request'

export const UPDATE_REQUEST_STATUS = 'UPDATE_REQUEST_STATUS'

export const updateRequestStatus = status => ({
  type: UPDATE_REQUEST_STATUS,
  payload: { status }
})

export const requestUserData = () => {
  return (dispatch, getState) => {
    if (getState().data.status === -1) return
    dispatch(updateRequestStatus(-1))
    $request.get('/api/data').then(response => {
      dispatch(updateRequestStatus(2))
      console.log(response)
    }).catch(err => {
      dispatch(updateRequestStatus(1))
    })
  }
}
