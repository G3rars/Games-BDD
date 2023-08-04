const { desencryptToken } = require('../authentication/jwt.js')

async function verifyToken (req, res, next) {
    try {
        const token = req.body.token
        await desencryptToken (token)
        return next()
    } catch (error) {
        throw new Error('Token incorrecto')
    }
}

module.export = { verifyToken }
