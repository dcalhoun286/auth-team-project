'use strict';

const express = require('express');
const cors = require('cors')
const app = express();
const morgan = require('morgan');
const methodOverride = require('method-override');


const authRouter = require('./auth/middleware/routes/routes.js');

app.use(express.json());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors())
app.use(methodOverride('_method'));
app.use(authRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use('*', (req, res) => {
  res.status(404).send('Route does not exist')
})

module.exports = {
  app: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server up on port ${port}`);
    });
  },
};
