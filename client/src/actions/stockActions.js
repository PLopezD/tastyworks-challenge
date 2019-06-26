import LocalStorageService from '../services/localStorageService'

export const setStocks = (value) => dispatch => {
  dispatch({
    type: 'SET_STOCKS',
    payload: value
  })
}

export const selectStock = (value) => dispatch => {
  LocalStorageService.addStock(value);
  dispatch({
    type: 'ADD_RECENT',
    payload: value
  })
  dispatch({
    type: 'SELECT_STOCK',
    payload: value
  })
}

export const setRecents = (value) => dispatch => {
  dispatch({
    type: 'SET_RECENTS',
    payload: value
  })
}
