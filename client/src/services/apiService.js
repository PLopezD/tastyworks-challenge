class ApiService {
    constructor() {
        this.baseUrl = `https://wiei5kwurd.execute-api.us-east-1.amazonaws.com`
        this.apiKey = `?token=pk_9b761c3850b1447c9b9d911c988e2bd4`
    }
    
    getStocks(searchValue){
        return fetch(`${this.baseUrl}/dev/stocks?name=${searchValue}`)
                .then(res => res.json())
                .then(body => body.stocks);
    }

    getStockData(symbol, range) {   
        const url = this.generateCloudUrl(symbol, range)
        return fetch(url)
            .then(res => res.json())

    }
    generateCloudUrl(symbol, range) {
        const dateObj = new Date();
        const month = this.addZero(dateObj.getUTCMonth() + 1)
        const day = dateObj.getUTCDate()
        const year = dateObj.getUTCFullYear();
        const dateString = `${year}${month}${day}`
        return `https://cloud.iexapis.com/beta/stock/${symbol}/chart/${range || '1m'}/${dateString}${this.apiKey}`
    }

    addZero(month) {
        return month < 10 ? '0' + month : '' + month; 
    }
}

export default new ApiService()