const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonationSchema = new Schema({
  donor: { type: Schema.Types.ObjectId, ref: "User" },
  donor_name: { type: String, required: true },
  amount: { type: Number, required: true },
  donation_date: { type: Date, required: true },
  donor_contact: { type: String, required: true },
  purpose: { type: String },
});

module.exports = mongoose.model("Donation", DonationSchema);
