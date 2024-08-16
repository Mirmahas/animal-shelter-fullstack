const express = require("express");
const userRouter = express.Router();
const User = require("../models/User.model");

userRouter.post("/users", async (req, res, next) => {
  const { email, password, name, address, phone, date_of_birth, role } =
    req.body;
  try {
    const createdUser = await User.create({
      email,
      password,
      name,
      address,
      phone,
      date_of_birth,
      role,
    });
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

userRouter.put("/users/:id", async (req, res, next) => {
  const { email, password, name, address, phone, date_of_birth, role } =
    req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        email,
        password,
        name,
        address,
        phone,
        date_of_birth,
        role,
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

userRouter.delete("/users/:id", async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
