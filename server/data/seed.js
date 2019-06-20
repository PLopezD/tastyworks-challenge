'use strict';
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const dynamo = new AWS.DynamoDB.DocumentClient();
const dynamoDB = new AWS.DynamoDB;
const argv = require('yargs').argv

const STOCK_TABLE_NAME = 'stocksTable';
const CSV_PATH = path.resolve('./data.csv')

function seed() {
    let stockSaves = 0
    fs.createReadStream(CSV_PATH)
        .pipe(csv())
        .on('data', (row) => {
            let stock = createStock(row);
            saveStock(stock);
            stockSaves++

        })
        .on('end', () => {
            console.log(`CSV parse complete. ${stockSaves} records parsed. Uploading..`);
        });
}

function createStock(row) {
    const stock = {
        stockId: uuidv1(),
        symbol: row.Symbol,
        displayName: row.Name,
        lowerName: row.Name.toLocaleLowerCase(),
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
    return dynamo.put(params).promise()
}

function deleteTable() {
    const params = {
        TableName: STOCK_TABLE_NAME,
    };
    return new Promise((resolve, reject) => {
        dynamoDB.deleteTable(params, (err, data) => {
            if (err) {
                console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
                reject(err)
            } else {
                console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
                resolve(JSON.stringify(data, null, 2))
            }
        });
    })
}

function createTable() {
    const params = {
        TableName: STOCK_TABLE_NAME,
        AttributeDefinitions: [
            {
                AttributeName: 'stockId',
                AttributeType: 'S'
            }
        ],
        KeySchema: [
            {
                AttributeName: 'stockId',
                KeyType: 'HASH'
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5000,
            WriteCapacityUnits: 5000
        }
    };
    return new Promise((resolve, reject) => {
        dynamoDB.createTable(params, (err, data) => {
            if (err) {
                console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
                reject(err)
            } else {
                console.log("Table created. Table description JSON:", JSON.stringify(data, null, 2));
                resolve(JSON.stringify(data, null, 2))
            }
        });
    })
}


if (argv.delete) {
    deleteTable()
}
if (argv.create) {
    createTable()
}
if (argv.seed) {
    seed();
}