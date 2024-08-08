const express = require("express");
const medicalRecordRouter = express.Router();
const MedicalRecord = require("../models/MedicalRecord.model");

// Ruta para crear un nuevo registro médico
medicalRecordRouter.post("/medical-records", async (req, res, next) => {
  const {
    animal,
    visit_date,
    diagnosis,
    treatment,
    medication,
    veterinarian_name,
  } = req.body;
  try {
    const createdMedicalRecord = await MedicalRecord.create({
      animal,
      visit_date,
      diagnosis,
      treatment,
      medication,
      veterinarian_name,
    });
    res.status(201).json(createdMedicalRecord);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener todos los registros médicos
medicalRecordRouter.get("/medical-records", async (req, res, next) => {
  try {
    const medicalRecords = await MedicalRecord.find().populate("animal");
    res.json(medicalRecords);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener un registro médico específico por su ID
medicalRecordRouter.get("/medical-records/:id", async (req, res, next) => {
  try {
    const medicalRecord = await MedicalRecord.findById(req.params.id).populate(
      "animal"
    );
    if (!medicalRecord) {
      return res.status(404).json({ message: "Medical record not found" });
    }
    res.json(medicalRecord);
  } catch (error) {
    next(error);
  }
});

// Ruta para actualizar un registro médico específico por su ID
medicalRecordRouter.put("/medical-records/:id", async (req, res, next) => {
  const {
    animal,
    visit_date,
    diagnosis,
    treatment,
    medication,
    veterinarian_name,
  } = req.body;
  try {
    const updatedMedicalRecord = await MedicalRecord.findByIdAndUpdate(
      req.params.id,
      {
        animal,
        visit_date,
        diagnosis,
        treatment,
        medication,
        veterinarian_name,
      },
      { new: true }
    );
    if (!updatedMedicalRecord) {
      return res.status(404).json({ message: "Medical record not found" });
    }
    res.json(updatedMedicalRecord);
  } catch (error) {
    next(error);
  }
});

// Ruta para eliminar un registro médico específico por su ID
medicalRecordRouter.delete("/medical-records/:id", async (req, res, next) => {
  try {
    const deletedMedicalRecord = await MedicalRecord.findByIdAndDelete(
      req.params.id
    );
    if (!deletedMedicalRecord) {
      return res.status(404).json({ message: "Medical record not found" });
    }
    res.json({ message: "Medical record deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = medicalRecordRouter;
