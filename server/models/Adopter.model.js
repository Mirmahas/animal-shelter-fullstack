const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdopterSchema = new Schema({
  adopter: { type: Schema.Types.ObjectId, ref: "User" },
  animals: [{ type: Schema.Types.ObjectId, ref: "Animal" }],
});

module.exports = mongoose.model("Adopter", AdopterSchema);
