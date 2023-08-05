// Libraries
const express = require('express');
const { checkUserHassession } = require('../../utils/middleware/user.middleware.js')

// Controllers
const {
  handleRegister,
  handleLogin,
  handleLogout,
  handleProfile

} = require('../../controllers/user.controller.js'); 

const userRouter = express.Router();
userRouter
    .route('/register')
    .post(handleRegister);

userRouter
    .route('/login')
    .post(handleLogin);

userRouter
    .route('/logout')
    .post(checkUserHassession, handleLogout);

userRouter
    .route('/profile')
    .get(checkUserHassession, handleProfile);

module.exports = userRouter;