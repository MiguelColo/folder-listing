const express = require('express');
var serveIndex = require('serve-index');
var path = require("path");

const app = express();

app.use('/', serveIndex(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (request, response, next) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker. :)</h1>');
});

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});