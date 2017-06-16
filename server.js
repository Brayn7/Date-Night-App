// const dotenv = require('./dist/env.json');
// const yelp = require('./node_modules/yelp-fusion');
// console.log('test');
// exports.printMsg = function() {
//   console.log("This is a message from the demo package");
// }

// // Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// // from https://www.yelp.com/developers/v3/manage_app
// const clientId = dotenv.DB_USER;
// const clientSecret = dotenv.DB_PASS;

// const searchRequest = {
//   term:'Four Barrel Coffee',
//   location: 'san francisco, ca'
// };

// yelp.accessToken(clientId, clientSecret).then(response => {
//   const client = yelp.client(response.jsonBody.access_token);

//   client.search(searchRequest).then(response => {
//     const firstResult = response.jsonBody.businesses[0];
//     const prettyJson = JSON.stringify(firstResult, null, 4);
//     console.log(prettyJson);
//     exports.data = prettyJson;
//   });
// }).catch(e => {
//   console.log(e);
// });