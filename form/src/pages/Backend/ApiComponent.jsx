import React from "react";

const ApiComponent = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        🌐 What is an API?
      </h2>

      <p className="text-gray-700 mb-4">
        An <strong>API (Application Programming Interface)</strong> allows communication between client and server. In a MERN stack project, APIs are created using <code>Express.js</code> to interact with a <code>MongoDB</code> database via <code>Mongoose</code>.
      </p>

      <div className="bg-sky-50 border border-sky-200 p-4 rounded-md mb-6">
        <h3 className="text-xl font-semibold text-slate-700 mb-2">🚀 Common API Methods</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>GET</strong>: Retrieve data (e.g. <code>GET /users</code>)</li>
          <li><strong>POST</strong>: Create new data (e.g. <code>POST /users</code>)</li>
          <li><strong>PUT</strong>: Update existing data (e.g. <code>PUT /users/:id</code>)</li>
          <li><strong>DELETE</strong>: Remove data (e.g. <code>DELETE /users/:id</code>)</li>
        </ul>
      </div>

      <div className="bg-gray-100 border border-gray-200 p-4 rounded-md mb-6">
        <h3 className="text-lg font-semibold text-slate-700 mb-2">🛠️ Sample Express API</h3>
        <pre className="text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap">
{`// routes/user.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

// Define routes
router.get('/', userController.getAll);         // GET all users
router.get('/:id', userController.getById);     // GET user by ID
router.post('/', userController.create);        // POST new user
router.put('/:id', userController.update);      // PUT update user
router.delete('/:id', userController.delete);   // DELETE user

module.exports = router;`}
        </pre>
      </div>

      <div className="bg-green-50 border border-green-200 p-4 rounded-md mb-6">
        <h3 className="text-lg font-semibold text-slate-700 mb-2">📦 MongoDB Integration</h3>
        <p className="text-gray-700 mb-2">
          These API routes use <strong>Mongoose</strong> to connect and perform operations on a <strong>MongoDB</strong> database.
        </p>
        <pre className="text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap">
{`// models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: String,
  password: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);`}
        </pre>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
        <h3 className="text-lg font-semibold text-slate-700 mb-2">📡 Final API URL Example</h3>
        <p className="text-gray-700 mb-1">
          Assuming your server is running on <code>http://localhost:5000</code>, here are some example API calls:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><code>GET /api/users</code> – Get all users</li>
          <li><code>POST /api/users</code> – Create new user</li>
          <li><code>GET /api/users/:id</code> – Get user by ID</li>
          <li><code>PUT /api/users/:id</code> – Update user by ID</li>
          <li><code>DELETE /api/users/:id</code> – Delete user by ID</li>
        </ul>
      </div>
    </div>
  );
};

export default ApiComponent;
