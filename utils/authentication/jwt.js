const jwt = require('jsonwebtoken')

const SECRET_PASSWORD_JWT = process.env.SECRET_PASSWORD_JWT || 'miCodigoSecreto'

// crear un token
function generateToken (data) {
  console.log(data);
  const payload = JSON.parse(JSON.stringify(data))

  const token = jwt.sign(
    payload, 
    SECRET_PASSWORD_JWT, 
    { expiresIn: '1h' }
  )
  return token
}

// desencriptar un token
function desencryptToken (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_PASSWORD_JWT, (err, decodedPayload) => {
      if (err) {
        reject(err)
      } else {
        resolve(decodedPayload)
      }
    })
  })
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