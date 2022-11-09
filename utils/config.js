require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URI = 'mongodb://0.0.0.0:27017/app';
const SECRET = process.env.SECRET;

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET
};
