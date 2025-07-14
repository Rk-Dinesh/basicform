const User = require('../model/user_Model');
const bcrypt = require('bcrypt');

// Create a new user with hashed password
exports.createUser = async (data) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);
  const user = new User({
    ...data,
    password: hashedPassword
  });
  return await user.save();
};

// Sign in: match email and compare hashed password
exports.signInUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  return user;
};

// Delete user by ID
exports.deleteById = async (id) => {
  return await User.findByIdAndDelete(id);
};

// Delete user by phone
exports.deleteByPhone = async (phone) => {
  return await User.findOneAndDelete({ phone });
};

// Get user by ID
exports.getUserById = async (id) => {
  return await User.findById(id);
};

// Get all users
exports.getAllUsers = async () => {
  return await User.find();
};

// Get users by name
exports.getUsersByName = async (name) => {
  return await User.findOne({ fname: new RegExp(name, 'i') });
};