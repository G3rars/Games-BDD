// Libraries
const express = require('express');
const cors = require('cors');
// Utils
const connect = require('./utils/db/connect.js');
const cloudinary = require('./utils/db/cloudinary.js');

// Routers
const apiRouter = require('./router/routerApi.js')

connect();

const server = express();

server.use(cors);

server.use(express.json());
server.use(express.urlencoded({ extended: false }))

server.use(apiRouter)

server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`server is online in http://localhost:${PORT}`);
});

module.exports = server;

// async function handleError(req, res, next) {
//     try {
//         if (error.message === 'No encontrado') {
//             res.status(400).json({ message: 'EL juego no existe en la DB' })
//         }
//     } catch (error) {
//         console.log('error inesperado')
//         res.status(400).json({ message: error.message })
//     }
// }

// server.use(handleError) // <-- middleware para errores