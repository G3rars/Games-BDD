const express = require('express');

const userRouter = require('./routes/user.routes.js');
// const gamesRouter = require('./routes/games.routes.js');
// const storesRouter = require('./routes/stores.routes.js');
// const favoritesRouter = require('./routes/favorite.routes.js')

const apiRouter = express.Router()

apiRouter.use('/user', userRouter)
// apiRouter.use('/favorites', favoritesRouter)
// apiRouter.use('/stores', storesRouter);
// apiRouter.use('/', gamesRouter);
apiRouter.use('*', (req, res, next) => {
    res.status(404).json('La ruta no existe')
    next(error);
})

module.exports = apiRouter