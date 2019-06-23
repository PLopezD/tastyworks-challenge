export default (state = {}, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        result: action.payload
      }
    default:
      return state
  }
}
