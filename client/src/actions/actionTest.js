export const actionTest = (value) => dispatch => {
  dispatch({
    type: 'TEST',
    payload: value
  })
}
