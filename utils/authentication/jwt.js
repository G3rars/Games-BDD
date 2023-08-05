const jwt = require('jsonwebtoken')

const SECRET_PASSWORD_JWT = process.env.SECRET_PASSWORD_JWT || 'miCodigoSecreto'

// crear un token
function generateToken (data) {
  const payload = JSON.parse(JSON.stringify(data))
  payload.password = undefined
  try {
    const token = jwt.sign(
      payload, 
      SECRET_PASSWORD_JWT, 
      { expiresIn: '1h' }
    )

    return token
    
  } catch (error) {
    throw new Error("error al generar el token", error)
  }
}

// desencriptar un token
function desencryptToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_PASSWORD_JWT, (err, decodedPayload) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          reject(new Error('El token ha expirado. Inicia sesión nuevamente.'));
        } else if (err.name === 'JsonWebTokenError') {
          reject(new Error('El token no es válido. Inicia sesión nuevamente.'));
        } else {
          reject(err); // Si el error no es específico, se rechaza con el error original
        }
      } else {
        resolve(decodedPayload);
      }
    });
  });
}

module.exports = {
  generateToken,
  desencryptToken
}

/* ================== router ================== */

/* 
gamesRouter
  .router('/games')
  .get(authenticatejwt, responder)
  .post()
  .put()
  .delete()
 */

/* 
  gamesRouter
  .router('/games')
  .get([logOriginalUrl, logMethod], (req, res, next) => { res.send('User Info')})
*/

/* ================== controller ================== */

/*
async function authenticatejwt (req, res, next) {
  try {
    verifToken
    next()
  } catch (error) {
    next(err)
  }
}

async function responder (req, res, next) {
    try {
        const games = await Games.find();
        return res.status(200).json(games);
    } catch (err) {
        next(err);
    }
}
 */