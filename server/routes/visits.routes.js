const express = require("express");
const visitRouter = express.Router();
const Visit = require("../models/Visits.model");

// Ruta para crear una nueva visita
visitRouter.post("/visits", async (req, res, next) => {
  const { animal, visitor, visit_date, reason, notes } = req.body;
  try {
    const createdVisit = await Visit.create({
      animal,
      visitor,
      visit_date,
      reason,
      notes,
    });
    res.status(201).json(createdVisit);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener todas las visitas
visitRouter.get("/visits", async (req, res, next) => {
  try {
    const visits = await Visit.find().populate("animal").populate("visitor");
    res.json(visits);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener una visita específica por su ID
visitRouter.get("/visits/:id", async (req, res, next) => {
  try {
    const visit = await Visit.findById(req.params.id)
      .populate("animal")
      .populate("visitor");
    if (!visit) {
      return res.status(404).json({ message: "Visit not found" });
    }
    res.json(visit);
  } catch (error) {
    next(error);
  }
});

// Ruta para actualizar una visita específica por su ID
visitRouter.put("/visits/:id", async (req, res, next) => {
  const { animal, visitor, visit_date, reason, notes } = req.body;
  try {
    const updatedVisit = await Visit.findByIdAndUpdate(
      req.params.id,
      {
        animal,
        visitor,
        visit_date,
        reason,
        notes,
      },
      { new: true }
    );
    if (!updatedVisit) {
      return res.status(404).json({ message: "Visit not found" });
    }
    res.json(updatedVisit);
  } catch (error) {
    next(error);
  }
});

// Ruta para eliminar una visita específica por su ID
visitRouter.delete("/visits/:id", async (req, res, next) => {
  try {
    const deletedVisit = await Visit.findByIdAndDelete(req.params.id);
    if (!deletedVisit) {
      return res.status(404).json({ message: "Visit not found" });
    }
    res.json({ message: "Visit deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = visitRouter;
