const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const { env } = require("./lib/database.js");
const { nodePort } = require("./lib/connection.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb', extend: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true}));



if (env === 'dev' || env === 'uat' || env === 'prod') {
  app.use('/', express.static(path.join(__dirname, 'dist')));
  app.use('/dist', express.static(path.join(__dirname, 'dist')));
} else {
  app.use('/', express.static(path.join(__dirname, '..', 'src')));
  app.use('/src', express.static(path.join(__dirname, '..', 'src')));
}

app.use('/api/auth', require('./routes/auth'));
app.use('/', require('./routes/mainRoute'));


const server = http.createServer(app);
server.listen(nodePort, async () => {
    console.log('server is running on port: ', nodePort);
});