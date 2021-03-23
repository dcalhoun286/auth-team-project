'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const base64 = require('base-64');

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user', enum: ['user', 'editor', 'admin'] },
  bio: { type: String, max: 100 }
}, { toJSON: { virtuals: true } })

users.virtual('token').get(function () {
  let tokenObj = {
    username: this.username,
  }
  return jwt.sign(tokenObj, process.env.SECRET);
})

users.virtual('capabilities').get(function () {
  let acl = {
    user: ['read'],
    editor: ['read', 'create', 'update'],
    admin: ['read', 'create', 'update', 'delete']
  }
  return acl[this.role];
})

users.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
})

users.statics.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ username });
  const valid = await bcrypt.compare(password, user.password);
  if (valid) {
    return user;
  }
  throw new Error('not authorized');
}

users.statics.authenticateWithToken = async function (token) {
  console.log('THIS IS AUTHENTICATE WITH TOKEN', token)
  try {
    const parsedToken = await jwt.verify(token, process.env.SECRET);
    console.log("PARSED TOKEN", parsedToken)
    const user = await this.findOne({ username: parsedToken.username });
    if (user) {
      return user;
    } else {
      console.log('THIS IS ELSE')
      throw new Error('user not found');
    }
  } catch (e) {
    console.log('THIS IS CATCH')
    throw new Error(e.message);
  }
}

module.exports = mongoose.model('user', users);
