'use strict';

const stockManager = require('./stockManager.js');

function createResponse(statusCode, message) {
  const response = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
  return response;
}

module.exports.getStocks = async (event) => {
  let params = event.queryStringParameters;
  return stockManager.getStocks(params).then((stocks) => {
    console.timeEnd('getStocks');
    return createResponse(200, {stocks});
  }).catch(error => {
    return createResponse(400, error);
  })
};

