const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
  volunteer: { type: Schema.Types.ObjectId, ref: "User" },
  availability: { type: String, required: true },
  assigned_task: [mongoose.Schema.Types.Mixed],
});

module.exports = mongoose.model("Volunteer", VolunteerSchema);
