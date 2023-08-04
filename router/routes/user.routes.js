// Libraries
const express = require('express');

// Controllers
const {
  handleRegister,
  handleLogin,
  handleLogout
} = require('../../controllers/user.controller.js'); 

const userRouter = express.Router();
userRouter
    .route('/register')
    .post(handleRegister);

userRouter
    .route('/login')
    .post(handleLogin);

userRouter
    .route('/logout/')
    .post(handleLogout);

module.exports = userRouter;