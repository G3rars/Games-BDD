const { gameService } = require("../services/games.service")

async function getGames (req, res, next) {
    try {
        const games = await gameService.get()
        res.status(200).json(games)        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function createGame (req, res, next) {
    try {
        const game = await gameService.post(JSON.parse(req.body.gamesData), req.files)
        res.status(201).json(game)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function getOneGame (req, res, next) {
    try {
        const game = await gameService.getOne(req.params.id)
        res.status(302).json(game)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
async function updateGame (req, res, next) {
    try {
        const id = req.params.id
        const updates = JSON.parse(req.body.gamesData)
        const game = await gameService.put(id, updates, req.files)
        res.status(200).json('Se ha actualizado el juego')
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function deleteGame (req, res, next) {
    try {
        await gameService.delete(req.params.id)
        res.status(200).json('Se ha eliminado el juego')
    } catch (error) {
        // next(error)
        res.status(400).json({ message: error.message })
    }
}

module.exports = 
{
    getGames,
    getOneGame,
    createGame,
    updateGame,
    deleteGame
}