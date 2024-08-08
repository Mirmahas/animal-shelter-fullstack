const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicalRecordSchema = new Schema({
  animal: { type: Schema.Types.ObjectId, ref: "Animal", required: true },
  visit_date: { type: Date, required: true },
  diagnosis: { type: String, required: true },
  treatment: { type: String, required: true },
  medication: { type: String, required: true },
  veterinarian_name: { type: String, required: true },
});

module.exports = mongoose.model("MedicalRecord", MedicalRecordSchema);
