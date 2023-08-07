const Games = require('../schemas/games.model')
const GameModel = require('../models/game.model');
const { imageService } = require('./image.service');

class GameService {
   async get () {
      try {
        const games = await Games.find()
        return games 
      } catch (error) {
        throw new Error('La coleccion no existe')
      }
    }

    async getOne (id) {
      try {
        const game = await Games.findOne({ _id: id })
        if (game === null) throw new Error('El juego no existe')
        return game 
      } catch (error) {
          throw new Error(error.message)
      }
    }
    
    async post(game, files) {
      try { 
        const newGame = new GameModel({ ...game })
        if (files && files.length > 0) {
          const urls = await imageService.saveImage(files);
          newGame.images = urls;
        }
        const createGame = await Games.create(newGame.DTO())
        return createGame
      } catch (error) {
        throw new Error(`Fallo al cargar el juego: -> ${error.message}`);
      }
    }
    
    async put (id, updates, files) {
      try {
        if (files && files.length > 0) {
          const urls = await imageService.saveImage(files);
          updates.images = urls
        }
        await Games.findByIdAndUpdate({ _id: id }, updates)
      } catch (error) {
        throw new Error('Fallo al actualizar los productos')
      }
    }

    async delete (id) {
      try {
        const game = await Games.findOne({ _id: id })
        if (game === null) throw new Error(`Fallo al borrar el juego -> ${error.message}`)
        await game.delete({ _id: game._id })
      } catch (error) {
        throw new Error(error.message)
      }   
    }
}

const gameService = new GameService()

module.exports = { gameService }