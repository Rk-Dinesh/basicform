import React from "react";

const ServiceComponent = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        🔐 User Service with bcrypt (Security Best Practices)
      </h2>

      <p className="text-gray-700 mb-4">
        The <strong>service layer</strong> handles database logic and uses <code>bcrypt</code> to securely hash and compare passwords. This ensures passwords are never stored in plain text.
      </p>

      <div className="bg-gray-100 border border-gray-200 p-4 rounded-md mb-6">
        <pre className="text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap">
{`// services/user.service.js
const User = require('../model/user.model'); // call correct path 
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
};`}
        </pre>
      </div>
    </div>
  );
};

export default ServiceComponent;
