const mongoose = require('mongoose');
const dotenv = require("dotenv");

const { MONGODB_URI } = require('./utils/config');
dotenv.config();

const connectToDB = () => {
  try {
    mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error(`Error while connecting to MongoDB: `, error.message);
  }
};

module.exports = connectToDB;
