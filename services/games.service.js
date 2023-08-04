const Games = require('../schemas/games.model')
const GameModel = require('../models/game.model');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

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
    
    async post(req) {
      try { 
        const newGame = new GameModel({ ...req.body })
        const imageFile = req.files
        const imagePaths = imageFile.map((image) => image.path); 
        const uploadPromises = imagePaths.map((value) => cloudinary.uploader.upload(value));
        const images = await Promise.all(uploadPromises);
        const urls = images.map(value => value.secure_url)
        newGame.images = urls
        await Games.create(newGame)
        imagePaths.forEach((path) => {
          fs.unlinkSync(path);
        });
        
      } catch (error) {
        throw new Error('Fallo al cargar el juego nuevo')
      }
    }
    
    async put (id, updates) {
      try {
        await Games.findOneAndUpdate({ _id: id }, updates)
      } catch (error) {
        throw new Error('Fallo al actualizar los productos')
      }
    }

    async delete (id) {
      try {
        const game = await Games.findOne({ _id: id })
        if (game === null) throw new Error('Fallo al borrar el juego')
        await game.delete({ _id: game._id })
      } catch (error) {
        throw new Error(error.message)
      }   
    }
}

const gameService = new GameService()

module.exports = { gameService }