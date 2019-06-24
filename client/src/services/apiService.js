class ApiService {
    constructor() {
        this.baseUrl = `https://wiei5kwurd.execute-api.us-east-1.amazonaws.com`
    }
    
    getStocks(searchValue){
        return fetch(`${this.baseUrl}/dev/stocks?name=${searchValue}`)
                .then(res => res.json())
                .then(body => body.stocks);
    }
}

export default new ApiService()