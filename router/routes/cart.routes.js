// Libraries
const express = require('express');
// middlewares
const { haveStock } = require('../../utils/middleware/stock-middleware.js');
const { isAdmin, checkUserHassession } = require('../../utils/middleware/user.middleware');

// Controllers
const {
  getCarts,
  addGameCart,
  updateCart,
  DeleteGameCart
} = require('../../controllers/cart.controller.js'); 


const cartRouter = express.Router();
cartRouter
    .route('/:id')
    .get(getCarts) // obtiene todos los productos de un usuario en su carrito 
    //.post(addGameCart) // agrega productos al carrito (el put ya lo hace borrar mas adelante si es necesario)
    .put(checkUserHassession,haveStock,updateCart) // agrega juegos al carrito
    .delete(DeleteGameCart) // borra productos del carrito (falta por hacer)

module.exports = cartRouter;