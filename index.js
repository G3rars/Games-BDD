// Libraries
const express = require('express');
const connect = require('./utils/db/connect.js');
const apiRouter = require('./router/routerApi.js')
const cors = require('cors');
const path = require("path")
connect();


const server = express();

server.use(cors());

server.use(express.json());

server.use(express.urlencoded({ extended: false }));

server.use(express.static(path.join(__dirname, 'public')));

server.use(apiRouter)

server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`server is online in http://localhost:${PORT}`);
});

module.exports = server;