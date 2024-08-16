const express = require("express");
const adopterRouter = express.Router();
const Adopter = require("../models/Adopter.model");

adopterRouter.post("/adopters", async (req, res, next) => {
  try {
    const newAdopter = new Adopter(req.body);
    const savedAdopter = await newAdopter.save();
    res.status(201).json(savedAdopter);
  } catch (error) {
    next(error);
  }
});

adopterRouter.get("/adopters", async (req, res, next) => {
  try {
    const adopters = await Adopter.find()
      .populate("adopter")
      .populate("animals");
    res.json(adopters);
  } catch (error) {
    next(error);
  }
});

adopterRouter.get("/adopters/:id", async (req, res, next) => {
  try {
    const adopter = await Adopter.findById(req.params.id)
      .populate("adopter")
      .populate("animals");
    if (!adopter) {
      return res.status(404).json({ message: "Adopter not found" });
    }
    res.json(adopter);
  } catch (error) {
    next(error);
  }
});

adopterRouter.delete("/adopters/:id", async (req, res, next) => {
  try {
    const deletedAdopter = await Adopter.findByIdAndDelete(req.params.id);
    if (!deletedAdopter) {
      return res.status(404).json({ message: "Adopter not found" });
    }
    res.json({ message: "Adopter deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = adopterRouter;
