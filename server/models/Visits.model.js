const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
  animal: { type: Schema.Types.ObjectId, ref: "Animal", required: true },
  visitor: { type: Schema.Types.ObjectId, ref: "User", required: true },
  visit_date: { type: Date, required: true },
  reason: { type: String, required: true },
  notes: { type: String },
});

module.exports = mongoose.model("Visit", VisitSchema);
