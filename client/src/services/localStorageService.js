const localStorage = window.localStorage;

class LocalStorageService {
    constructor() {
        this.storageKey = 'recentSearches'
    }
    addStock(stock) {
        let stocks = JSON.parse(localStorage.getItem(this.storageKey))
        if (stocks && stocks.length) {
            stocks.push(stock)
        } else {
            stocks = [stock]
        }
        const store = this.removeDuplicates(stocks.slice(-5), 'stockId')
        localStorage.setItem(this.storageKey, JSON.stringify(store))
        return store
    }
    retrieveSearches() {
        return JSON.parse(localStorage.getItem(this.storageKey)) || null
    }

    removeDuplicates(myArr, prop) {
        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }
}

export default new LocalStorageService()