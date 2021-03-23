'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('../models/users.js');
const basicAuth = require('../basic');
const bearerAuth = require('../bearer.js');
const permissions = require('../acl.js');


authRouter.post('/signup', signupUser);
authRouter.post('/signin', basicAuth, signinUser);
authRouter.get('/read', bearerAuth, permissions('read'), readHandler)
authRouter.put('/update', bearerAuth, permissions('update'), updateHandler)
authRouter.delete('/delete', bearerAuth, permissions('delete'), deleteHandler)

async function signupUser(req, res, next) {
  try {
    let user = new User(req.body);
    const userRecord = await user.save();
    console.log(userRecord);
    res.status(201).json(userRecord)
  } catch (e) {
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

async function readHandler(req, res, next) {
  let currentUser = req.user
  const user = await User.findOne({ username: currentUser.username });
  res.status(200).json(user);
};

async function updateHandler(req, res, next) {
  const obj = req.body;
  console.log('THIS IS OBJECT IN UPDATE HANDLER', obj)
  let updatedRecord = await User.update({ username: obj.username }, { $set: { bio: obj.bio } })
  res.status(200).send(`Bio for user '${obj.username}' has been succesfully updated!`);
};

async function deleteHandler(req, res, next) {
  let user = req.body.username
  let deletedRecord = await User.findOneAndDelete({ username: user });
  res.status(200).send(`User '${deletedRecord.username}' has been successfully deleted`);
}

module.exports = authRouter;
