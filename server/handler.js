'use strict';

const seedData = require('./data/seed.js');

function createResponse(statusCode, message) {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
  return response;
}

module.exports.uploadToDynamoDB = async (event) => {
  seedData().then(() => {
    return createResponse(200, 'Table successfully seeded');  
  }).catch((error) => {
    return createResponse(400, error);  
  })
};
