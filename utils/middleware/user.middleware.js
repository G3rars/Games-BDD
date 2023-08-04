const { desencryptToken } = require("../authentication/jwt")

async function checkUserHassession (req, res, next) {
      try {
        const token = desencryptToken(req.body.token)
        if(!token) throw new Error('Token invalido')
        res.locals.token = token
        next()
      } catch (error) {
        res.status(400).json({ message: error.message })
      }
    }
    
async function isAdmin (req, res, next) {
      try {
        const token = await res.locals.token
        if(token.role === 'user') throw new Error('Acceso denegado')
        next()
    } catch (error) {
        res.status(400).json({ message: error.message })
      }
    }

    module.exports = {
      checkUserHassession,
      isAdmin,
    };
    