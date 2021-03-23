'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('../models/users.js');

authRouter.get('/signup', signupUser);
authRouter.get('/signin', signinUser);

function signupUser(req, res) {
  res.send('sign up page');
}

function signinUser(req, res) {
  res.send('sign in page');
}

module.exports = authRouter;