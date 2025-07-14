import React from "react";
import BackendCard from "../components/BackendCard";

const BackendStructure = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
        🛠️ Backend Folder Structure Explained
      </h2>

      <pre className="my-6 bg-gray-50 border border-gray-200 p-4 rounded-md text-sm text-gray-700 whitespace-pre-wrap">
        {`📁 backend/
├── 📁 model/
├── 📁 service/
├── 📁 controller/
├── 📁 router/
├── 📁 utils/
├── 🧪 .env
├── ⚙️ config.js
└── 🚀 app.js`}
      </pre>

      <div className="grid md:grid-cols-2 gap-6">
        <BackendCard
          title="📦 model/"
          description="Contains Mongoose or database schema definitions. Defines how data is structured in the database."
          example={`// user.model.js\nconst mongoose = require('mongoose');\nconst UserSchema = new mongoose.Schema({ name: String });\nmodule.exports = mongoose.model('User', UserSchema);`}
          bgColor="bg-blue-50"
        />

        <BackendCard
          title="🔧 service/"
          description="Handles business logic. Keeps the controller thin and focuses on operations like create, update, delete."
          example={`// user.service.js\nconst User = require('../model/user.model');\nexports.createUser = async (data) => await User.create(data);`}
          bgColor="bg-green-50"
        />

        <BackendCard
          title="🎮 controller/"
          description="Handles the request and response logic. Calls services and sends responses."
          example={`// user.controller.js\nconst service = require('../service/user.service');\nexports.create = async (req, res) => {\n  const user = await service.createUser(req.body);\n  res.json(user);\n};`}
          bgColor="bg-yellow-50"
        />

        <BackendCard
          title="🚦 router/"
          description="Defines route endpoints and maps them to controller functions."
          example={`// user.routes.js\nconst express = require('express');\nconst router = express.Router();\nconst controller = require('../controller/user.controller');\nrouter.post('/users', controller.create);\nmodule.exports = router;`}
          bgColor="bg-pink-50"
        />

        <BackendCard
          title="🚀 app.js"
          description="The entry point of the app. Sets up Express, middleware, routes, and server listening."
          example={`const express = require('express');\nconst app = express();\nrequire('dotenv').config();\napp.use(express.json());\napp.use('/api', require('./router/user.routes'));\napp.listen(3000);`}
          bgColor="bg-indigo-50"
        />

        <BackendCard
          title="🧪 .env"
          description="Stores environment variables like database URL, secret keys, etc."
          example={`PORT=3000\nMONGO_URI=mongodb://localhost:27017/myapp\nJWT_SECRET=secretkey`}
          bgColor="bg-purple-50"
        />

        <BackendCard
          title="⚙️ config.js"
          description="Central configuration file to export env variables or settings used across the app."
          example={`module.exports = {\n  port: process.env.PORT,\n  db: process.env.MONGO_URI,\n};`}
          bgColor="bg-orange-50"
        />

        <BackendCard
          title="🛠️ utils/"
          description="Contains reusable utility functions like validators, helpers, or formatters."
          example={`// validators.js\nexports.isEmail = (email) => /\\S+@\\S+\\.\\S+/.test(email);`}
          bgColor="bg-teal-50"
        />
      </div>
    </div>
  );
};

export default BackendStructure;
