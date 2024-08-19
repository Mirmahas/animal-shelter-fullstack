const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  status: {
    type: String,
    enum: ["with-shelter", "with-adopter"],
    default: "with-shelter",
  },
  image_url: { type: String },
});

module.exports = mongoose.model("Animal", AnimalSchema);
