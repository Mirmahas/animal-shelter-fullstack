const adoptRouter = require("express").Router();
const Adopter_Animal = require("../models/Adopter_Animal.model");
const Adopter = require("../models/Adopter.model");
const Animal = require("../models/Animal.model");

adoptRouter.post("/", async (req, res, next) => {
  const { adopter, pet, adoption_date } = req.body;

  try {
    let adopterRecord = await Adopter.findOne({ adopter: adopter.userId });

    if (!adopterRecord) {
      adopterRecord = new Adopter({
        adopter: adopter.userId,
        animals: [pet._id],
      });
      await adopterRecord.save();
    } else {
      if (!adopterRecord.animals.includes(pet._id)) {
        adopterRecord.animals.push(pet._id);
        await adopterRecord.save();
      }
    }

    const createdAdoption = await Adopter_Animal.create({
      animal: pet._id,
      adopter: adopterRecord._id,
      adoption_date,
    });

    await Animal.findByIdAndUpdate(pet._id, { status: "with-adopter" });

    res.json(createdAdoption);
  } catch (error) {
    next(error);
  }
});

module.exports = adoptRouter;
