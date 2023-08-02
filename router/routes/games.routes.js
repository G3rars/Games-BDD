// const express = require('express');
// const Games = require('../models/games.model.js');
// const createError = require('../utils/errors/create-error.js')

// const gamesRouter = express.Router();

// gamesRouter.get('/', async (req, res, next) => {
//     try {

//         return res.status(200).json('Bienvenido a la base de datos de juegos');

//     } catch (err) {

//         next(err);
//     }


// });


// // --------------endpoint de todas los juegos---------------------

// gamesRouter.get('/games', async (req, res, next) => {
//     try {
//         const games = await Games.find();
//         return res.status(200).json(games);

//     } catch (err) {

//         next(err);
//     }


// });


// // -----------------------------endpoint filtrado por año-------------------------------------

// gamesRouter.get('/games/year', async (req, res, next) => {
//     try {
//         const games = await Games.find(

//             { year: { $gte: 2019 } }

//         );
//         return res.status(200).json(games);

//     } catch (err) {

//         next(err);
//     }


// });

// // ------------------------endpoint filtrado por titulos-----------------------------------

// gamesRouter.get('/games/title/:title', async (req, res, next) => {
//     const title = req.params.title;

//     try {

//         const games = await Games.find(
//             { title: { $in: [title] } }
//         );

//         if (games == '') {

//             next(createError('El juego no existe o esta mal escrito', 404));


//         } else {
//             return res.status(200).json(games);

//         }


//     } catch (err) {

//         next(err);
//     };


// });




// // --------------------------endpoint filtrado por genero-----------------------------

// gamesRouter.get('/games/genre/:genre', async (req, res, next) => {
//     const genre = req.params.genre;
//     try {
//         const games = await Games.find(
//             { genre: { $in: [genre] } }
//         );

//         if (games == "") {

//             next(createError('La categoria no existe', 404));

//         } else {

//             return res.status(200).json(games);

//         }

//     } catch (err) {

//         next(err)

//     };


// });

// // -----------------------endpoint filtrado por id----------------------------------------------

// gamesRouter.get('/games/:id', async (req, res, next) => {
//     const id = req.params.id;
//     try {
//         const games = await Games.findById(id);
        
//         if (games) {
           
//             return res.status(200).json(games);

//         } else {

//             next(createError("el ID de la pelicula no existe", 404));
//         }

//     } catch (err) {

//         next(err)
//     }


// });


// // ---------POST para agregar una nueva pelicula-----------------------

// gamesRouter.post('/games', async (req, res, next) => {

        
        
//     try {

     
//         const newGame  = new Games({ ...req.body });

//         const createGames = await newGame.save();

//         return res.status(201).json(createGames);

    
//     } catch (err) {
        
//         next(err);
//     }
// });

// // ---------------Delete para eliminar una pelicula-------------------------

// gamesRouter.delete('/games/:id', async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const deleteGame = await Games.findByIdAndDelete(id);
//         return res.status(200).json('El elemento ha sido eliminado correctamente');

//     } catch (err) {

//         next(err);
//     }
// });

// // ---------------------------Put para actualizar los valores de una pelicula en especifico----------------------------------------

// gamesRouter.put('/games/:id', async (req, res, next) => {

//     try {
//         const id = req.params.id;
//         const modifiedGame = new Games({ ...req.body })

//         modifiedGame._id = id;

//         const gameUpdt = await Games.findByIdAndUpdate(

//             id,
//             { $set: { ...modifiedGame } },
//             { new: true }

//         );
  
//         return res.status(200).json('El elemento ha sido actualizado correctamente');




//     } catch (err) {

//         next(err)
//     }

// });


// module.exports = gamesRouter;