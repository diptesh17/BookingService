const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const { PORT } = require("./config/server");

const serverSetup = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server Started on Port : ${PORT}`);
  });
};

serverSetup();
