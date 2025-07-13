import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosVsFetch = () => {
  const [fetchData, setFetchData] = useState(null);
  const [axiosData, setAxiosData] = useState(null);

  const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setFetchData(data))
      .catch((err) => console.error('Fetch Error:', err));
  }, []);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setAxiosData(res.data))
      .catch((err) => console.error('Axios Error:', err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">🔍 Axios vs Fetch</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-indigo-50 border border-indigo-200 rounded-md p-4">
          <h3 className="text-xl font-bold text-indigo-800 mb-2">🌐 Fetch API</h3>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>Built-in browser API</li>
            <li>Returns Promises</li>
            <li>Manually handle JSON, errors</li>
            <li>No automatic timeout or interceptors</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-md p-4">
          <h3 className="text-xl font-bold text-slate-800 mb-2">📦 Axios</h3>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>External library</li>
            <li>Handles JSON automatically</li>
            <li>Built-in timeout, interceptors, request/response transforms</li>
            <li>More concise syntax</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <h4 className="font-semibold text-slate-700 mb-2">📄 Fetch Example</h4>
          <code className="block bg-gray-100 p-4 text-sm rounded overflow-auto">
{`useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => setFetchData(data));
}, []);`}
          </code>

          {fetchData && (
            <div className="mt-3 text-sm text-gray-800">
              <strong>Title:</strong> {fetchData.title}
            </div>
          )}
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 mb-2">📄 Axios Example</h4>
          <code className="block bg-gray-100 p-4 text-sm rounded overflow-auto">
{`useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => setAxiosData(res.data));
}, []);`}
          </code>

          {axiosData && (
            <div className="mt-3 text-sm text-gray-800">
              <strong>Title:</strong> {axiosData.title}
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
        <h3 className="text-xl font-bold text-slate-800 mb-2">🛠️ Common HTTP Methods</h3>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li><strong>GET</strong>: Retrieve data from a server</li>
          <li><strong>POST</strong>: Send new data to the server</li>
          <li><strong>PUT</strong>: Replace existing data</li>
          <li><strong>PATCH</strong>: Update part of existing data</li>
          <li><strong>DELETE</strong>: Remove data</li>
        </ul>
      </div>
    </div>
  );
};

export default AxiosVsFetch;
