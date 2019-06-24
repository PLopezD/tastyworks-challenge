export const setStocks = (value) => dispatch => {
  dispatch({
    type: 'SET_STOCKS',
    payload: value
  })
}

export const selectStock = (value) => dispatch => {
  dispatch({
    type: 'SELECT_STOCK',
    payload: value
  })
}
