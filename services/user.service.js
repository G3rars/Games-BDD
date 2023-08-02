const UserModel = require('../models/user.model.js')
const {User, Session} = require('../schemas/users.js')
const { generateToken } = require('../utils/authentication/jwt.js')

class UserService {
  async register(data) {
    try {
            const findUser = await User.find({ email: data.email }).lean()
            // esto puede fallar
            if (findUser.length !== 0) throw new Error('Ya existe el usuario')
            const user = new UserModel({ email: data.email, password: data.password })
            const createUser = await User.create(user.DTO())
            console.log(createUser)
            return createUser

        } catch (error) {
            throw error
        }
    }

  async login (data) {
    try {
      const findUser = await User.find({ email: data.email}).lean()
      if (findUser.length === 0) throw new Error('El usuario no existe')
      if (findUser[0].password !== data.password) throw Error ('Contraseña incorrecta')
      token = generateToken(data)
      await Session.create({ userId: findUser[0]._id, accessToken: token });
      return token
      
    } catch (error) {
      throw error
    }
  }

  logout() {
    
  }
}

const userService = new UserService()

module.exports = { userService }

