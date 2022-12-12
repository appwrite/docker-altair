const express = require('express');
const {altairExpress} = require('@appwrite.io/altair-express-middleware');

const app = express();

// Mount your altair GraphQL client
app.use('/', altairExpress({
    endpointURL: process.env.SERVER_URL,
    initialHeaders: {
        "X-Appwrite-Project": "",
    },
    initialQuery: `query listContinents {
        localeListContinents {
            total
            continents { 
                name
                code
            }
        }
    }`,
    initialSettings: {
        "alert.disableWarnings": true,
        "schema.reloadOnStart": true,
        "request.withCredentials": true,
    }
}));

app.listen(3000, () => {
    console.log("GraphQL Explorer listening on port 3000!");
    console.log("Endpoint url: " + process.env.SERVER_URL)
});