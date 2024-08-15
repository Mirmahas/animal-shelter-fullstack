require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");

const {
  errorHandler,
  notFoundHandler,
} = require("./middleware/error-handling");

// config :
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas :
const adoptRouter = require("./routes/adopt.routes");
const { isAuthenticated } = require("./middleware/jwt.middleware");
const animalRouter = require("./routes/animal.routes");
const userRouter = require("./routes/user.routes");
const visitRouter = require("./routes/visits.routes");

const authRouter = require("./routes/auth.routes");
const adopterRouter = require("./routes/adopter.routes");

app.use("/auth", authRouter);
app.use("/api/adopt", adoptRouter);
app.use("/api/animal", animalRouter);
app.use("/", userRouter);
app.use("/api", visitRouter);
app.use("/api/adopter", adopterRouter);

// Use error handlers
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
