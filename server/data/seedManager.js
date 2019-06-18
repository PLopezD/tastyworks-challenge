const uuidv1 = require('uuid/v1');
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const csv = require('csv-parser');
const fs = require('fs');

const STOCK_TABLE_NAME = process.env.stocksTableName;

module.exports.seedData = () => {
    console.log('loading stocks..');
    parseCSV()
}

function parseCSV() {
    let stocks = []
    fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (row) => {
            let stock = createStock(row)
            stocks.push(stock)
        })
        .on('end', () => {
            return Promise.all(uploadStocks(stocks)).then(() => {
                return 'Success'
            }).catch(() => {
                return 'Error'
            })
        });
}

function createStock(row) {
    const stock = {
        stockId: uuidv1(),
        symbol: row.Symbol,
        name: row.Name,
        lastSale: row.LastSale,
        marketCap: row.MarketCap,
        IPOYear: row.IPOYear,
        sector: row.Sector,
        industry: row.Industry,
        website: row.Website,
        exchange: row.Exchange
    }
    return stock;
}

function uploadStocks(stockArray) {
    const promises = []
    for (let index = 0; index < stockArray.length; index++) {
        const stock = stockArray[index];
        promises.push(saveStock(stock))
    }
    return promises
}

function saveStock(stock) {
    const params = {
        TableName: TABLE_NAME,
        Item: stock
    }
    return dynamo.put(params).promise()
}

