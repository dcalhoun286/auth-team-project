'use strict';

const express = require('express');
const app = express();

module.exports = {
  app: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server up on port ${port}`);
    });
  },
};
