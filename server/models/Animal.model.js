const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  arrival_date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["with-shelter", "with-volunteer", "with-adopter"],
    default: "with-shelter",
  },
  image_url: { type: String },
  microchip_id: { type: String },
  weight: { type: Number },
  color: { type: String },
});

module.exports = mongoose.model("Animal", AnimalSchema);
