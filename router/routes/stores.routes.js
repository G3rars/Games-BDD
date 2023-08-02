// const express = require('express');
// const Stores = require('../models/stores.models.js');
// const createError = require('../utils/errors/create-error.js');
// // ----------------- ruta de todos los cines--------------------
// const storesRouter = express.Router();

// storesRouter.get('/', async (req, res, next) => {
//     try {

//         const stores = await Stores.find().populate('games');
//         return res.status(200).json(stores);
        
//     } catch (err) {
//         next(err);
//     }
// })


// // ----------------------POST para agregar cines-------------------------

// storesRouter.post('/', async (req, res, next) => {

//     try {

//         const newCinema = new Stores({ ...req.body })

//         const createCin = await newCinema.save();

//         return res.status(201).json(createCin);


//     } catch (err) {

//         next(err);
//     }
// });

// // -----------put para agregar peliculas en un cine especifico--------------

// storesRouter.put('/addgames', async (req, res, next) => {

//     try {
//         const { gameId, locationId } = req.body;
//         if(!locationId) {
//            return next(createError('Se necesita un id de la localizacion para añadir los juegos', 500));
//         }if(!gameId){
//             return next(createError('Se necesita la id del juego para agregarlo a la tienda'));
        
//         }else{
//             const updateGames = await Stores.findByIdAndUpdate(
//                 locationId,
//                 { $push: { games: gameId }},
//                 { new: true }
//             )
//             return res.status(200).json('Las peliculas han sido actualizadas');
//         };
        
//     } catch (err) {

//         next(err);

//     }

// })


// // --------------Delete para borrar cines-----------------------------

// storesRouter.delete('/:id', async (req, res, next) => {
//     try{
//         const id = req.params.id;
//         const deleteStore = await Stores.findByIdAndDelete(id);
//         return res.status(200).json('El elemento ha sido eliminado correctamente');

//     }catch(err){
       
//         next(err);
//     }
// });


// module.exports = storesRouter;