var express = require('express');
var altairExpress = require('altair-express-middleware');

const server = express();

// Mount your altair GraphQL client
server.use('/', altairExpress.altairExpress({
    initialHeaders: {
        "X-Appwrite-Project": "",
        "X-Appwrite-Key" : ""
    },
    endpointURL: process.env.SERVER_URL,
    initialQuery: `query listContinents {
        locale_getContinents {
          sum
          continents { 
              name
            code
          }
        }
      }`
}));

server.listen(3000, function () {
        console.log('GraphQL Explorer listening on port 3000!');
        console.log("Endpoint url: " + process.env.SERVER_URL)
    }
);