import React from 'react'

const Home = () => {
  return (
    <div>
     
      <p className="text-center text-gray-700 mt-4">
        Welcome to the React Form App! This application demonstrates various React concepts and hooks through interactive forms and components.
      </p>
     <ul className="list-disc list-inside max-w-2xl mx-auto mt-6">
        <li className="text-lg text-gray-800 mt-4">
          <strong>Basic Forms:</strong> Explore basic form handling with validation and submission.
        </li>
        <li className="text-lg text-gray-800 mt-2">
          <strong>React Hooks:</strong> Learn about useState, useEffect, and other hooks in React.
        </li>
        <li className="text-lg text-gray-800 mt-2">
          <strong>Props and State Management:</strong> Understand how to pass data between components using props and manage state effectively.
        </li>
        <li className="text-lg text-gray-800 mt-2">
          <strong>Axios vs Fetch:</strong> Compare Axios and Fetch for making API requests in React applications.
        </li>
        <li className="text-lg text-gray-800 mt-2">
          <strong>Profile Management:</strong> Manage user profiles with forms and state management.
        </li>
        <li className="text-lg text-gray-800 mt-2">
          <strong>Use Cases:</strong> Explore practical use cases for React forms and hooks in real-world applications.
        </li>
     </ul>
    </div>
  )
}

export default Home
