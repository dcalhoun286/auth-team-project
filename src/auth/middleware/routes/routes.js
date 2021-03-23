'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('../models/users.js');
const basicAuth = require('../basic');
const bearerAuth = require('../bearer.js');
const permissions = require('../acl.js');


authRouter.post('/signup', signupUser);
authRouter.get('/signin', basicAuth, signinUser);
authRouter.get('/users', bearerAuth, permissions('read'), userHandler)
authRouter.get('/update', bearerAuth, permissions('update'), updateHandler)
authRouter.get('/delete', bearerAuth, permissions('delete'), deleteHandler)

async function signupUser(req, res, next) {
  try {
    console.log(req.body)
    let user = new User(req.body);
    console.log(user)
    const userRecord = await user.save();
    res.status(201).json(userRecord)
  } catch (e) {
    console.log('HELLO WORLD')
    next(e.message)
  }
}

async function signinUser(req, res, next) {
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user)
}

async function userHandler(req, res, next){
  let currentUser = req.user
  const user = await User.findOne({username: currentUser.username});
  res.status(200).json(user);
};

async function updateHandler(req, res, next){
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj)
  res.status(200).json(updatedRecord);
};

async function deleteHandler(req, res, next) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}

module.exports = authRouter;

