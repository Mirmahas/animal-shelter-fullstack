require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {
  errorHandler,
  notFoundHandler,
} = require("./middleware/error-handling");
const { connectDB } = require("./db");
//
// config :
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas :
const adoptRouter = require("./routes/adopt.routes");
const animalRouter = require("./routes/animal.routes");
const donationRouter = require("./routes/donation.routes");
const userRouter = require("./routes/user.routes");
const visitRouter = require("./routes/visits.routes");
const volunteerRouter = require("./routes/volunteers.routes");
const medicalRecordRouter = require("./routes/medicalRecord.routes");
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);
app.use("/api/adopt", adoptRouter);
app.use("/api/animal", animalRouter);
app.use("/api/donation", donationRouter);
app.use("/api/mediacalRecord", medicalRecordRouter);
app.use("/", userRouter);
app.use("/api/visit", visitRouter);
app.use("/api/volunteer", volunteerRouter);

// // Use error handlers
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
