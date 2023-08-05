const { cartService } = require("../services/cart.service")

async function getCarts (req, res, next) {
try {
     const cart = await cartService.get(req.body.token)
     res.status(200).json(cart)
} catch (error) {

  res.status(400).json({ message: error.message })
    
}
}

async function addGameCart (req, res, next) {
 try {
      
 } catch (error) {
    
 }   
}

async function updateCart (req, res, next) {
    try {
         await cartService.put(req.params.id, req.body.token)
          res.status(200).json('juego agregado al carrito')
    } catch (error) {

      res.status(400).json({ message: error.message })
      
    }  
  }

async function DeleteGameCart (req, res, next) {
 try {
    
 } catch (error) {
    
 }   
}

module.exports = {
    getCarts, 
    addGameCart, 
    updateCart,
    DeleteGameCart
}