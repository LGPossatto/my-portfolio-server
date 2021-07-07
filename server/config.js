const dotenv = require('dotenv');
dotenv.config();

let port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;
const secretKey = process.env.SECRET_KEY;

module.exports = {port, mongoUri, secretKey}