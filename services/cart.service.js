const Games = require('../schemas/games.model.js')
const Cart = require('../schemas/cart.model.js')
const { desencryptToken } = require('../utils/authentication/jwt.js')
class CartService {

  async get(token) {
        try {
             const tokenData = await desencryptToken(token);
             const cart = await Cart.findById({ _id: tokenData.cart }).populate('items').exec()
             if (!cart) throw new Error ("no se ha encontrado el carrito en el metodo get")
             return cart
        } catch (error) {
            throw error
        }
    }

    async post() {
        try {

        } catch (error) {

        }
    }

    async put(id, token) {
        try {
            const game = await Games.findById({ _id: id })
            if (!game) throw new Error("juego no encontrado en metodo put")
            const dataToken = await desencryptToken(token)
            const findCart = await Cart.findById({ _id: dataToken.cart})
            if (!findCart) throw new Error('El carrito de compra no fue encontrado en metodo put')
            findCart.items.push(game)
            game.stock = game.stock - 1
            await game.save()
            await findCart.save()
        } catch (error) {
            throw error

        }
    }

    delete() {
        try {

        } catch (error) {

        }
    }
}

const cartService = new CartService()

module.exports = { cartService }