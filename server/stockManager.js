'use strict';
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.stocksTableName;

// getting stocks with query (more expensive than querying)
module.exports.getStocks = (body) => {
    console.log(body);
    const params = {
        TableName: TABLE_NAME,
        ExpressionAttributeNames: {
            "#lowerName": "lowerName",
        },
        ExpressionAttributeValues: {
            ":lowerName": "a",
        },
        FilterExpression: "begins_with(#lowerName, :lowerName)"
    }
    return dynamo.scan(params).promise().then(result => {
        return filterItems(result.Items)
    })
}

function filterItems(items) {
    return items.sort((a, b) => {return a.lowerName === b.lowerName ? 0 : a.lowerName < b.lowerName ? -1 : 1}).slice(0, 10)
}