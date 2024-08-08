const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdoptionSchema = new Schema({
  animal: { type: Schema.Types.ObjectId, ref: "Animal", required: true },
  volunteer: { type: Schema.Types.ObjectId, ref: "User", required: true },
  adoption_date: { type: Date, required: true },
});

module.exports = mongoose.model("Adoption", AdoptionSchema);
