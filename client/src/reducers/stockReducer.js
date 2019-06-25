export default (state = {
  stocks: [],
  selectedStock: {
    displayName: "Cracker Barrel Old Country Store, Inc.",
    exchange: "NASDAQ",
    industry: "Restaurants",
    lastSale: "169.97",
    lowerName: "cracker barrel old country store, inc.",
    marketCap: "$4.09B",
    sector: "Consumer Services",
    stockId: "0fd64012-93af-11e9-be3e-293efc450a0b",
    symbol: "CBRL",
    website: "https://www.nasdaq.com/symbol/cbrl"
  }
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
