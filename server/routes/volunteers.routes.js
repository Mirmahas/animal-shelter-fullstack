const express = require("express");
const volunteerRouter = express.Router();
const Volunteer = require("../models/Volunteer.model");

// Ruta para crear un nuevo voluntario
volunteerRouter.post("/volunteers", async (req, res, next) => {
  const { volunteer, availability, assigned_task } = req.body;
  try {
    const createdVolunteer = await Volunteer.create({
      volunteer,
      availability,
      assigned_task,
    });
    res.status(201).json(createdVolunteer);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener todos los voluntarios
volunteerRouter.get("/volunteers", async (req, res, next) => {
  try {
    const volunteers = await Volunteer.find().populate("volunteer");
    res.json(volunteers);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener un voluntario específico por su ID
volunteerRouter.get("/volunteers/:id", async (req, res, next) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id).populate(
      "volunteer"
    );
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.json(volunteer);
  } catch (error) {
    next(error);
  }
});

// Ruta para actualizar un voluntario específico por su ID
volunteerRouter.put("/volunteers/:id", async (req, res, next) => {
  const { volunteer, availability, assigned_task } = req.body;
  try {
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(
      req.params.id,
      {
        volunteer,
        availability,
        assigned_task,
      },
      { new: true }
    );
    if (!updatedVolunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.json(updatedVolunteer);
  } catch (error) {
    next(error);
  }
});

// Ruta para eliminar un voluntario específico por su ID
volunteerRouter.delete("/volunteers/:id", async (req, res, next) => {
  try {
    const deletedVolunteer = await Volunteer.findByIdAndDelete(req.params.id);
    if (!deletedVolunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.json({ message: "Volunteer deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = volunteerRouter;
