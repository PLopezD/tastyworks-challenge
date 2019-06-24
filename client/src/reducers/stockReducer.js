export default (state = {
  stocks: [],
  selectedStock: {}
}, action) => {
  switch (action.type) {
    case 'SET_STOCKS':
      return {
        ...state,
        stocks: action.payload
      }
    case 'SELECT_STOCK':
      return {
        ...state,
        selectedStock: action.payload
      }
    default:
      return state
  }
}
