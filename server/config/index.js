const express = require("express");

const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";

// Middleware configuration
module.exports = (app) => {
  app.use(express.json());
  app.use(logger("dev"));
  app.use(express.urlencoded({ extended: false }));
  app.set("trust proxy", 1);
  app.use(cookieParser());
  app.use(
    cors({
      origin: [FRONTEND_URL],
    })
  );
};
