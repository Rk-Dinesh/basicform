const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');

// CREATE - register new user
router.post('/register', userController.create);

// SIGNIN - login with email & password
router.post('/signin', userController.signin);

// GET ALL users
router.get('/getallUser', userController.getAll);

// GET user by ID
router.get('/getUserbyId/:id', userController.getById);

// GET users by name
router.get('/getUserbyName/:name', userController.getByName);

// DELETE user by ID
router.delete('/deletebyUserId/:id', userController.deleteById);

// DELETE user by phone
router.delete('/deletebyPhone/:phone', userController.deleteByPhone);

module.exports = router;