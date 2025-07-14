const userService = require('../service/userService');

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
};