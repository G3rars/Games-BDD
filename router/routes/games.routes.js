// Libraries
const express = require('express');
const upload = require('../../utils/middleware/multer')

//middleware session
const { isAdmin, checkUserHassession } = require('../../utils/middleware/user.middleware');

// Controllers
const {
  getGames,
  getOneGame,
  createGame,
  updateGame,
  deleteGame
} = require('../../controllers/game.controller'); 


const gamesRouter = express.Router();
gamesRouter
    .route('/games')
    .get(getGames)
    .post(checkUserHassession,isAdmin,upload.array('images', 4), createGame)

gamesRouter
    .route('/games/:id')
    .get(getOneGame)
    .put(checkUserHassession,isAdmin,upload.array('images', 4),updateGame)
    .delete(checkUserHassession,isAdmin,deleteGame)
module.exports = gamesRouter;