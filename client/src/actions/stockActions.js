export const setStocks = (value) => dispatch => {
  dispatch({
    type: 'SET_STOCKS',
    payload: value
  })
}
