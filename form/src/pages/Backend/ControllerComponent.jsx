import React from "react";

const ControllerComponent = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        🧭 User Controller Layer
      </h2>

      <p className="text-gray-700 mb-4">
        The <strong>controller layer</strong> handles incoming HTTP requests, calls service functions, and returns JSON responses.
      </p>

      <div className="bg-gray-100 border border-gray-200 p-4 rounded-md mb-6">
        <pre className="text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap">
{`// controllers/user.controller.js
const userService = require('../service/user.service'); // call correct path

exports.create = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await userService.signInUser(req.body.email, req.body.password);
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const user = await userService.deleteById(req.params.id);
    res.status(200).json({ message: "User deleted", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteByPhone = async (req, res) => {
  try {
    const user = await userService.deleteByPhone(req.params.phone);
    res.status(200).json({ message: "User deleted", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getByName = async (req, res) => {
  try {
    const users = await userService.getUsersByName(req.params.name);
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};`}
        </pre>
      </div>
    </div>
  );
};

export default ControllerComponent;
