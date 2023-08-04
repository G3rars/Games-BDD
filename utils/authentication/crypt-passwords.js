const bcrypt = require('bcryptjs');

async function cryptPassword(userPassword) {
  try {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(userPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error al encriptar la contraseña');
  }
}

async function comparePasswords(userPassword, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(userPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error('Error al comparar las contraseñas');
  }
}

module.exports = { cryptPassword, comparePasswords }