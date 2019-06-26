### Setup
You shouldn't have to set up any backend for this project for the UI to run but if you'd like to here is how:
1. `npm install`
2. `npm install serverless -g`
3. `sls login`
4. `node data/seed.js --create` -- creates a dynamoDB table in your AWS account (default region is "us-east-1")
5. `node data/seed.js --seed` -- seeds the newly created table with stocks
6. `sls deploy` - this will return a new baseUrl you can use to update the ApiServer file in the UI 
