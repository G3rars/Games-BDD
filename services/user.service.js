const UserModel = require('../models/user.model.js')
const {User, Session} = require('../schemas/users.js')
const { generateToken, desencryptToken } = require('../utils/authentication/jwt.js')
const { cryptPassword, comparePasswords } = require('../utils/authentication/crypt-passwords.js')

class UserService {
  async register(data) {
    try {
        const findUser = await User.find({ email: data.email }).lean()
        if (findUser.length !== 0) throw new Error('Ya existe el usuario')
        const hashPassword = await cryptPassword(data.password)
        const user = new UserModel({ email: data.email, password: hashPassword, role: data.role })
        const createUser = await User.create(user.DTO())
        return createUser
      } catch (error) {
        throw error
      }
    }

  async login (data) {
    try {
      const findUser = await User.find({ email: data.email}).lean()
      const checkToken = await Session.find({ email:data.email })
      if (findUser.length === 0) throw new Error('El usuario no existe')
      if (checkToken.length !== 0) throw new Error('Ya hay una sesión iniciada')
      if (!comparePasswords(data.password,findUser[0].password)) throw Error ('Contraseña incorrecta')
      const token = generateToken(findUser[0])
      await Session.create({ email: findUser[0].email, token: token, role: findUser[0].role });
      return token
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async logout(data) {
    try {
      const readData = await desencryptToken(data)
      const user = await Session.find({ email: readData.email })
      if (user.length === 0) throw Error('No tienes ninguna sesión')
      await Session.deleteOne({ email: readData.email })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

const userService = new UserService()

module.exports = { userService }

 