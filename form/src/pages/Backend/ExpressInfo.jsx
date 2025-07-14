import React from "react";
import ServerCard from "../components/ServerCard";

const ExpressInfo = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
        🛠️  app.js Overview
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <ServerCard
          title="📦 Pacakge to install"
          codeSnippet={`npm i express mongoose bcrypt nodemon dotenv cors body-parser multer`}
          description="Install necessary packages for your Express server.
          This includes Express, Mongoose, Nodemon, dotenv, CORS, body-parser,  and multer."
          bgColor="bg-gray-50"
        />
        <ServerCard
          title="📦 Import Express"
          codeSnippet={`
        require('dotenv').config();
        const express = require('express');
        const cors = require('cors');
        const bodyParser = require('body-parser');
        const multer = require('multer');
        const port = process.env.PORT || 3000;`}
          description="Import the Express module to set up your server."
          bgColor="bg-blue-50"
        />

        <ServerCard
          title="⚙️ Initialize App"
          codeSnippet={`
        const app = express();
         `}
          description="Create an Express application instance."
          bgColor="bg-green-50"
        />

        <ServerCard
          title="🚦 Middleware Setup"
          codeSnippet={`
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
            `}
          description="Add middleware to handle JSON requests."
          bgColor="bg-yellow-50"
        />

        <ServerCard
          title="🌐 Basic Route"
          codeSnippet={`app.get('/', (req, res) => res.send('Hello World'));`}
          description="Define a basic route for the root URL."
          bgColor="bg-pink-50"
        />

        <ServerCard
          title="🔧 Start Server"
          codeSnippet={`app.listen(3000, () => console.log('Server running on port 3000'));`}
          description="Start the server and listen on port 3000."
          bgColor="bg-indigo-50"
        />

        <ServerCard
          title="📄  package.json"
          codeSnippet={` "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js"
  },`}
          description="Add scripts to your package.json for development.
          Use Nodemon to automatically restart the server on file changes."
          bgColor="bg-green-50"
        />

        <ServerCard
          title="🚀 Run Server"
          codeSnippet={`npm run dev`}
          description="Use Nodemon to run the server in development mode.
          This will automatically restart the server on file changes."
          bgColor="bg-pink-50"
        />
      </div>

      <div className="bg-gray-50 border border-gray-200 p-4 rounded-md mt-6">
        <code className="block text-sm text-gray-700 whitespace-pre-wrap">
          {`// Full server.js example
require('dotenv').config();         
const express = require('express');
//const connectDB = require('./config/db');
//const userRouter = require("./router/userRouter");
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const port = process.env.PORT || 3000;

const app = express();
//connectDB();  // Connect to MongoDB

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/user',userRouter)

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`}
        </code>
      </div>
    </div>
  );
};

export default ExpressInfo;
