'use strict';

require('dotenv').config();

const server = require('./src/server.js');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3333;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}

mongoose.connect(process.env.MONGODB_URI, options)
  .then(server.start(PORT))
  .catch(error => {
    console.error(error);
  })
