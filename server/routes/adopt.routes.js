const adoptRouter = require("express").Router();
const Adopter_Animal = require("../models/Adopter_Animal.model");
const Animal = require("../models/Animal.model");

adoptRouter.post("/adopt", async (req, res, next) => {
  const { adopter, animal, adoption_date } = req.body;
  try {
    const createdAdoption = await Adopter_Animal.create({
      animal,
      adopter,
      adoption_date,
    });
    await createdAdoption.save();
    await Animal.findByIdAndUpdate(animal, { status: "with-adopter" });
    await Animal.save();

    res.json(createdAdoption);
  } catch (error) {
    next(error);
  }
});

module.exports = adoptRouter;
