const uuidv1 = require('uuid/v1');
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const STOCK_TABLE_NAME = process.env.stocksTableName;
const CSV_PATH = path.resolve(process.env.LAMBDA_TASK_ROOT, '_optimize', process.env.AWS_LAMBDA_FUNCTION_NAME, 'data/data.csv')

module.exports.seedData = () => {
    console.log('Starting stock loading..');
    return new Promise((resolve, reject) => {
        console.log(1);
        return resolve(parseCSV())
    })
}

function parseCSV() {
    fs.createReadStream(CSV_PATH)
        .pipe(csv())
        .on('data', (row) => {
            let stock = createStock(row);
            saveStock(stock)
        })
        .on('end', () => {
            console.log(3);
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
    return stock
}

function saveStock(stock) {
    const params = {
        TableName: STOCK_TABLE_NAME,
        Item: stock
    }
    console.log(params);
    return dynamo.put(params).promise()
}

function deleteTable() {
    const params = {
        TableName: STOCK_TABLE_NAME,
    };
    dynamodb.deleteTable(params, (err, data) => {
        if (err) {
            console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            this.parseCSV()
            console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
        }
    });
}