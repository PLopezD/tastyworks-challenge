export default (state = {
  stocks: []
}, action) => {
  switch (action.type) {
    case 'SET_STOCKS':
      return {
        stocks: action.payload
      }
    default:
      return state
  }
}
