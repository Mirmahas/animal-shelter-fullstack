// This code establishes and closes a connection to a MongoDB database using Mongoose, handling errors and displaying informational messages about the status of the connection.
const mongoose = require("mongoose");

async function connectDB() {
  try {
    const response = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.info(
      `MongoDB is connected, database name: ${response.connections[0].name}`
    );
  } catch (error) {
    console.error("Failed to connect to MongoDB | error:", error);
    process.exit(1);
  }
}

async function closeDB() {
  try {
    await mongoose.disconnect();
    console.info("disconnected MongoDB");
  } catch (error) {
    console.error("Failed to close MongoDB connection", error);
    process.exit(1);
  }
}

module.exports = { connectDB, closeDB };
