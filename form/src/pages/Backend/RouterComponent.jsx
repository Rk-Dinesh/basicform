import React from "react";

const RouterComponent = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        🚦 User Router Setup
      </h2>

      <p className="text-gray-700 mb-4">
        The <strong>router</strong> defines all API endpoints related to user operations and maps them to corresponding controller functions. Each route handles a specific HTTP request method and URL.
      </p>

      <div className="bg-gray-100 border border-gray-200 p-4 rounded-md mb-6">
        <pre className="text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap">
{`// routes/user.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller'); //call correct path

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

module.exports = router;`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-slate-700 mb-2">📌 Key Routes</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li><code>POST /register</code>: Create a new user</li>
        <li><code>POST /signin</code>: Log in a user</li>
        <li><code>GET /getallUser</code>: Get all users</li>
        <li><code>GET /getUserbyId/:id</code>: Get user by ID</li>
        <li><code>GET /getUserbyName/:name</code>: Search users by first name</li>
        <li><code>DELETE /deletebyUserId/:id</code>: Delete user by ID</li>
        <li><code>DELETE /deletebyPhone/:phone</code>: Delete user by phone</li>
      </ul>
    </div>
  );
};

export default RouterComponent;
