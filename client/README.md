I started this app with create react app to avoid having to write some boilerplate stuff. I've left part of their docs below to start the app. 

As of now `npm start` points to my api which has a baseUrl of: <br>
https://wiei5kwurd.execute-api.us-east-1.amazonaws.com  

If you want to switch to your baseUrl if you deploy your own lambdas you can update the ApiService constructor and everything should work on it's own. 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

