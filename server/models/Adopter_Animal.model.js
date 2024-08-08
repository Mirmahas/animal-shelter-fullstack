const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Adopter_Animal_Schema = new Schema({
  animal: { type: Schema.Types.ObjectId, ref: "Animal", required: true },
  adopter: { type: Schema.Types.ObjectId, ref: "Adopter", required: true },
  adoption_date: { type: Date, required: true },
});

module.exports = mongoose.model("Adopter_Animal", Adopter_Animal_Schema);
