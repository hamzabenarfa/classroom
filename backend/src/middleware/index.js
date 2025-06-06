const cors = require("cors");
const express = require("express");
const morgan = require('morgan');   

const configureMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
};

module.exports = { configureMiddleware };