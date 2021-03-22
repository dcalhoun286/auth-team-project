'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');

const authRouter = require('./routes/routes.js');

app.use(express.json());
app.use(authRouter);
app.use(morgan);

module.exports = {
  app: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server up on port ${port}`);
    });
  },
};
