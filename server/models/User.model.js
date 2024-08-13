const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  // address: { type: String, required: true },
  phone: { type: String },
  // role: {
  //   type: String,
  //   enum: ["adopter", "volunteer"],
  //   default: "adopter",
  // },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
