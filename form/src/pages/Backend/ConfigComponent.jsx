// pages/MongoConfigComponent.js
import React from "react";

const MongoConfig = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        ⚙️ MongoDB Configuration (db.js)
      </h2>

      <p className="text-gray-700 mb-4">
        The <strong>db.js</strong> file manages MongoDB connection settings using Mongoose. It centralizes connection logic and uses <code>.env</code> variables for flexibility and security.
      </p>

      <div className="bg-gray-100 border border-gray-200 p-4 rounded-md mb-6">
        <pre className="text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap">
{`// config/config.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectDB;`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-slate-700 mb-2">📌 How to Use</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
        <li>Create a file: <code>config/db.js</code></li>
        <li>Call <code>connectDB()</code> once in your main <code>app.js</code></li>
        <li>Ensure your <code>.env</code> file contains <code>MONGO_URI</code></li>
      </ul>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-6">
        <strong>.env Example:</strong>
        <pre className="text-sm mt-2 text-gray-800">
MONGO_URI=mongodb://localhost:27017/myapp
        </pre>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
        <strong>app.js Usage:</strong>
        <pre className="text-sm mt-2 text-gray-800 overflow-x-auto">
{`const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB(); // Connect to MongoDB
app.use(express.json());

// your routes...
app.listen(3000, () => console.log('Server running on port 3000'));`}
        </pre>
      </div>
    </div>
  );
};

export default MongoConfig;
