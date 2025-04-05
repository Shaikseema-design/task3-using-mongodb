const User = require("../models/User");

// Create User
const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const user = await User.create({ name, email, age });
  res.status(201).json(user);
};

// Get All Users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get User by ID
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// Update User
const updateUser = async (req, res) => {
  const { name, email, age } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { name, email, age },
    { new: true }
  );
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// Delete User
const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ message: "User deleted" });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
