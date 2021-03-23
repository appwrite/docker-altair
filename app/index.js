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
    initialQuery: `query { hello }`
}));

server.listen(3000, function () {
        console.log('Graphql ide listening on port 3000!');
        console.log("Endpoint url: " + process.env.SERVER_URL)
    }
);