import React, { useState } from 'react';

const UseState = () => {
  // 🔢 Counter
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  const [name, setName] = useState('');

  const [text, setText] = useState('');
  const maxLength = 100;

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">React Hooks: useState</h1>
        <p className="text-center text-gray-600 mb-4">Defnition: <code className="text-slate-600">useState</code> is a React Hook that lets you add state to functional components.</p>
        <p className="text-center text-gray-600 mb-4">It returns an array with two elements: the current state value and a function to update it.</p>
        <p className="text-center text-gray-600 mb-4">Example: <code className="text-slate-600">const [count, setCount] = useState(0);</code></p>
     
      <h2 className="text-2xl font-bold text-center text-slate-800 mb-10">🧠 useState Hook Examples</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Counter Section */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold text-slate-700 mb-4">🔧 Counter</h3>
          <p className="mb-4 text-gray-700">
            <code className="text-slate-600">const [count, setCount] = useState(0);</code>
          </p>
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-gray-800">{count}</div>
            <div className="flex justify-center gap-3">
              <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                ➖
              </button>
              <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                🔁
              </button>
              <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                ➕
              </button>
            </div>
          </div>
        </div>

        {/* Input Preview Section */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold text-slate-700 mb-4">📝 Live Input Preview</h3>
          <p className="mb-4 text-gray-700">
            <code className="text-slate-600">const [name, setName] = useState('');</code>
          </p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border px-3 py-2 rounded mb-3"
          />
          <p className="text-gray-700 text-center">
            Hello, <span className="font-semibold">{name || 'stranger'}</span>!
          </p>
        </div>

        {/* Character Counter Section */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold text-slate-700 mb-4">✍️ Character Counter</h3>
          <p className="mb-4 text-gray-700">
            <code className="text-slate-600">const [text, setText] = useState('');</code>
          </p>
          <textarea
            rows="4"
            value={text}
            maxLength={maxLength}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            className="w-full border px-3 py-2 rounded mb-2"
          />
          <p className="text-right text-sm text-gray-600">{text.length} / {maxLength} characters</p>
        </div>
      </div>
    </div>
  );
};

export default UseState;
