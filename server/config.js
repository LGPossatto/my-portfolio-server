const dotenv = require('dotenv');
dotenv.config();

const mongoUri = process.env.MONGO_URI;
const secretKey = process.env.SECRET_KEY;

module.exports = {mongoUri, secretKey}