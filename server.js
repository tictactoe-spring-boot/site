const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', api);

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));