class ApiService {
    constructor() {
        this.baseUrl = `https://wiei5kwurd.execute-api.us-east-1.amazonaws.com`
    }
    
    getStocks(searchValue){
        return fetch(`${this.baseUrl}/dev/stocks?name=${searchValue}`)
                .then(res => res.json())
                .then(body => body.stocks);
    }
    getStockData() {
        // https://cloud.iexapis.com/stock/{ symbol } /chart/{ range } /{date}
        // https://cloud.iexapis.com/beta/stock/AMZN/quote/latestPrice?token=pk_9b761c3850b1447c9b9d911c988e2bd4
    }
}

export default new ApiService()