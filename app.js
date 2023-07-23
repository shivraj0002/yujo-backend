const express = require('express');
const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.all('*', (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'The requested route was not found',
  });
});

module.exports = app;
