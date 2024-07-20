const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  FLIGHTS_SERVICE_PATH: process.env.FLIGHTS_SERVICE_PATH,
};
