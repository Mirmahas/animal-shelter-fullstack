const express = require("express");
const animalRouter = express.Router();
const Animal = require("../models/Animal.model");

// Ruta para obtener todos los animales
animalRouter.get("/animals", async (req, res, next) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error) {
    next(error);
  }
});
//get only animas by species cats
animalRouter.get("/cats", async (req, res) => {
  try {
    const animals = await Animal.find({ species: "Cat" });
    res.json(animals);
  } catch (error) {}
});

//get only animas by species cats
animalRouter.get("/dogs", async (req, res) => {
  try {
    const animals = await Animal.find({ species: "Dog" });
    console.log(animals);
    res.json(animals);
  } catch (error) {}
});

// Ruta para obtener un animal específico por su ID
animalRouter.get("/animals/:id", async (req, res, next) => {
  console.log("test");
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: "Animal not found" });
    }
    res.json(animal);
  } catch (error) {
    next(error);
  }
});

module.exports = animalRouter;
