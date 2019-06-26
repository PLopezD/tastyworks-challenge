# tastyworks-challenge
I took this as an opportunity to learn a bit about how AWS's serverless ecosystem works. This project uses AWS Lambdas, ApiGateway and a DynamoDB table to store and retrieve stocks. 

The final project can be seen [here.](http://stockfinder-pld.s3.amazonaws.com/index.html) 
The API this site uses can be found here:

https://wiei5kwurd.execute-api.us-east-1.amazonaws.com/dev/stocks?name=a

note that the name field is required to avoid retreiving 4000+ stocks from the api at once.

### Setup

To set up the UI locally after cloning run:
  1. `cd client` 
  2. `npm install` 
  3. `npm start` 
  
To set up the "server" locally after cloning checkout the readme in the server folder.
    

