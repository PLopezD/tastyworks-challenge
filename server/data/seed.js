// const uuidv1 = require('uuid/v1');
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const csv = require('csv-parser');
const fs = require('fs');

const STOCK_TABLE_NAME = process.env.stocksTableName;

module.exports.seedData = () => {
    const params = {
        TableName: STOCK_TABLE_NAME
    };
    dynamo.get(params).promise().then(res => {
        console.log(res.Item);
        return res.Item
    })
}



