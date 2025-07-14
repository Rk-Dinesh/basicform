// pages/UserModel.js
import React from "react";

const UserModel = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        👤 User Model (Mongoose)
      </h2>

      <p className="text-gray-700 mb-4">
        This <strong>User Model</strong> defines the structure of user documents in a MongoDB collection using Mongoose. It includes common fields like name, contact details, and metadata.
      </p>

      <div className="bg-gray-100 border border-gray-200 p-4 rounded-md mb-6">
        <pre className="text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap">
{`// models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      trim: true
    },
    lname: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    location: {
      type: String,
      default: ""
    }
  },
  { timestamps: true } // adds createdAt and updatedAt
);

module.exports = mongoose.model('User', userSchema);`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-slate-700 mb-2">📌 Field Summary</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li><strong>fname / lname</strong>: First and last name (required).</li>
        <li><strong>email</strong>: Required, unique, lowercase.</li>
        <li><strong>phone</strong>: Required, unique phone number.</li>
        <li><strong>password</strong>: Minimum 6 characters, required.</li>
        <li><strong>location</strong>: Optional string.</li>
        <li><strong>timestamps</strong>: Automatically adds <code>createdAt</code> and <code>updatedAt</code>.</li>
      </ul>
    </div>
  );
};

export default UserModel;
