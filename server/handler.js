'use strict';

const stockManager = require('./stockManager.js');

function createResponse(statusCode, message) {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
  return response;
}

module.exports.getStocks = async (event) => {
  console.time('getStocks');
  const body = event.body ? JSON.parse(event.body) : {};
  return stockManager.getStocks(body).then((stocks) => {
    console.timeEnd('getStocks');
    return createResponse(200, {stocks});
  }).catch(error => {
    return createResponse(400, error);
  })
};

