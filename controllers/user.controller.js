const { userService } = require('../services/user.service.js')

// async function checkUserHassession (req, res, next) {
//   try {
//     const token = desencryptToken()
//     if (token === true){
      // tiene token dejar pasar o prhibir ruta
//     } else {
      // redirigir a login
//     }
//     req.locals.token = token
//     next()
//   } catch (error) {
//     res.status(400).json({ message: error.message })
//   }
// }

// async function isAdmin (req, res, next) {
//   try {
//     const token = req.locals.token
//     if (user === 'usuario') {
      // prohibir ruta
//       req.json({ no_access:'nope' })
//     }
//     else {
      // dejar actualizar o crear producto
//       next()
//     }
//   } catch (error) {
//     res.status(400).json({ message: error.message })
//   }
// }

async function handleRegister (req, res, next) {
  try {
    const user = await userService.register(req.body)
    res.status(201).json({ user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

async function handleLogin (req, res, next) {
  try {
    const user = await userService.login(req.body)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

async function handleLogout (req, res, next) {
  try {
    await userService.logout(req.body.token)
    res.status(200).json('Has cerrado sesión')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  handleRegister,
  handleLogin,
  handleLogout
}

/* 
  controller
    |-> servicio
          |-
          
*/


// class UserService {
//   registerUser (data) {
//     // verificar que el usuario NO exista en la db 
//     // si no existe, creo el usuario 
//     // sino, devuelvo error
//   }
// }

// class Usuario {
//   nombre
//   email
//   #pass // private
//   constructor ({ nombre = 'jerry', email = undefined, pass}) {
//     this.nombre = nombre
//     this.email = email
//     this.#pass = pass
//   }

//   changeNombre(nuevoNombre) {
//     this.nombre = nuevoNombre
//   }

//   obteneerPass() {
//     return this.pass
//   }

//   get pass () {
//     return this.pass
//   }

//   set pass (nuevaPASS) {
//     this.#pass = nuevaPASS
//   }

//   cambiarcontrasenia(nuevaPASS) {
//     this.pass = nuevaPASS
//   }
// }

// class UsuarioPremium extends Usuario {
//   role
//   constructor ({ nombre = 'jerry', email, pass, role }) {
//     super({ nombre, email, pass })
//     this.role = role
//   }
// }

// const jerry = new Usuario({ nombre: 'paco', email: 'jerry@gmail.com', pass: '122333'})

// jerry.pass = 'contrasenia nueva'
// jerry.cambiarcontrasenia('ajdnsaodd')
// const jerry = new Usuario({
//   pass:'canelo',
//   email: 'jerry@jerry.com',
//   nombre: 'jerry',
// })