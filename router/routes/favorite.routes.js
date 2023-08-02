// const express = require('express');
// const Favorites = require('../models/favorites.model');
// const upload = require('../utils/middleware/file.middleware.js')

// const favoritesRouter = express.Router();




// // --------------endpoint de todas los juegos---------------------

// favoritesRouter.get('/', async (req, res, next) => {
//     try {
//         const favorite = await Favorites.find();
//         return res.status(200).json(favorite);

//     } catch (err) {

//         next(err);
//     }


// });


// // ---------POST para agregar una nueva pelicula-----------------------

// favoritesRouter.post('/', [upload.single()]
//     , async (req, res, next) => {
//     try {

     
//         const newFavorite  = new Favorites({ ...req.body });

//         const addFavorite = await newFavorite.save();

//         return res.status(201).json(addFavorite);

    
//     } catch (err) {
        
//         next(err);
//     }
// });

// // ---------------Delete para eliminar una pelicula-------------------------

// favoritesRouter.delete('/favorites/:id', async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const deleteGame = await Favorites.findByIdAndDelete(id);
//         return res.status(200).json('El elemento ha sido eliminado correctamente');

//     } catch (err) {

//         next(err);
//     }
// });


// module.exports = favoritesRouter;