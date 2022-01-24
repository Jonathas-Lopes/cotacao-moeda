const mongoose = require('mongoose');
require('dotenv').config();

const connectionConfig = {
  async connect() {
    await mongoose.connect(`${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_COLLECTION}`);
  },
  db: mongoose.connection,
};
module.exports = connectionConfig;
