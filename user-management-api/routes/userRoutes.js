const express = require("express");
const { body } = require("express-validator");
const validate = require("../middleware/validateInput");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// Validators
const userValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("age").isInt({ min: 1 }).withMessage("Age must be a positive number"),
];

// Routes
router.post("/", userValidation, validate, createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", userValidation, validate, updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
