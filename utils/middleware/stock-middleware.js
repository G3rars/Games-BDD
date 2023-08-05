const Games = require("../../schemas/games.model");

async function haveStock(req, res, next) {
    try {
        const game = await Games.findById({ _id: req.params.id})
        if (game.stock <= 0) throw new Error("El juego esta agotado")
        next()
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
    
    
   
}

module.exports = { haveStock }