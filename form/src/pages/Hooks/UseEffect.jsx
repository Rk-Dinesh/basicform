import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("🔄 Count changed:", count);
    setMessage(`You clicked ${count} time(s)!`);

  
    return () => {
      console.log("🧹 Cleaning up for count:", count);
    };
  }, [count]); 


  useEffect(() => {
    console.log("✅ Component mounted");

  
    return () => {
      console.log("❌ Component unmounted");
    };
  }, []); 

  return (

    <div className="bg-gray-100  flex"> 
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">
        📡 useEffect Hook Demo
      </h2>

      <p className="mb-4 text-gray-700">
        <strong>useEffect</strong> is a React Hook used to run{" "}
        <strong>side effects</strong> like data fetching, DOM manipulation,
        event listeners, or syncing with external systems.
      </p>

      <div className="bg-indigo-50 border border-indigo-200 rounded-md p-4 mb-6">
        <code className="block text-sm text-indigo-800 whitespace-pre-wrap">
          {`useEffect(() => {
  // side effect code here

  return () => {
    // cleanup code here
  };
}, [dependencies])`}
        </code>
      </div>

      <div className="text-center space-y-4">
        <div className="text-3xl font-bold text-gray-800">{message}</div>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Click Me
        </button>
      </div>

      {/* Real-world Examples Section */}
      <div className="mt-10 space-y-6">
       
      </div>
    </div>
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
         <h3 className="text-xl font-bold text-indigo-700">
          📘 Common useEffect Examples:
        </h3>

        <div className="bg-gray-50 border border-gray-200 p-4 rounded-md">
          <p className="font-semibold text-gray-800 mb-2">
            1. Fetch data when the component mounts:
          </p>
          <code className="block text-sm text-gray-700 whitespace-pre-wrap">
            {`useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => console.log(data));
}, []);`}
          </code>
        </div>

     
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-md">
          <p className="font-semibold text-gray-800 mb-2">
            2. Add event listener and clean up:
          </p>
          <code className="block text-sm text-gray-700 whitespace-pre-wrap">
            {`useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);`}
          </code>
        </div>

        
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-md">
          <p className="font-semibold text-gray-800 mb-2">
            3. Watch specific state variable:
          </p>
          <code className="block text-sm text-gray-700 whitespace-pre-wrap">
            {`useEffect(() => {
  console.log('Count changed to:', count);
}, [count]);`}
          </code>
        </div>
    </div>
    </div>
  );
};

export default UseEffect;
