'use strict';

const seedManager = require('./data/seedManager.js');

function createResponse(statusCode, message) {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
  return response;
}

module.exports.uploadToDynamoDB = async (event) => {
  seedManager.seedData().then(() => {
    return createResponse(200, 'Table successfully seeded');  
  }).catch((error) => {
    return createResponse(400, error);  
  })
};
