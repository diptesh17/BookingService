const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log(`Server Started on Port : ${PORT}`);
});
