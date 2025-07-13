import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <h1 className="text-6xl font-extrabold text-slate-700 mb-4">404</h1>
      <p className="text-xl font-medium text-gray-700 mb-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-gray-500 mb-6">It might have been moved or deleted.</p>

      <Link
        to="/"
        className="bg-slate-600 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
