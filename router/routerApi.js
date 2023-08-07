const express = require('express');

const userRouter = require('./routes/user.routes.js');
const gamesRouter = require('./routes/games.routes.js');
// const storesRouter = require('./routes/stores.routes.js');
const cartRouter = require('./routes/cart.routes.js')

const apiRouter = express.Router()
apiRouter.use('/user', userRouter)
apiRouter.use('/cart', cartRouter)
// apiRouter.use('/stores', storesRouter);
apiRouter.use('/api', gamesRouter);
apiRouter.use('/', (req, res, next) => {
    res.status(200).send('Bienvenido')
    next(error);
})
apiRouter.use('*', (req, res, next) => {
    res.status(404).send('La ruta no existe')
    next(error);
})

module.exports = apiRouter