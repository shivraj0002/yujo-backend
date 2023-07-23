const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');
// eslint-disable-next-line no-unused-vars
const mongoose = require('./models/mongoose');

const port = process.env.PORT ? process.env.PORT : 8000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port: ', port);
});
