const express = require("express");
const donationRouter = express.Router();
const Donation = require("../models/Donation.model");

// Ruta para crear una nueva donación
donationRouter.post("/donations", async (req, res, next) => {
  const { donor, donor_name, amount, donation_date, donor_contact, purpose } =
    req.body;
  try {
    const createdDonation = await Donation.create({
      donor,
      donor_name,
      amount,
      donation_date,
      donor_contact,
      purpose,
    });
    res.status(201).json(createdDonation);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener todas las donaciones
donationRouter.get("/donations", async (req, res, next) => {
  try {
    const donations = await Donation.find().populate("donor");
    res.json(donations);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener una donación específica por su ID
donationRouter.get("/donations/:id", async (req, res, next) => {
  try {
    const donation = await Donation.findById(req.params.id).populate("donor");
    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }
    res.json(donation);
  } catch (error) {
    next(error);
  }
});

module.exports = donationRouter;
