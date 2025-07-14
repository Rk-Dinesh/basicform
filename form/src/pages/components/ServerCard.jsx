import React from "react";

const ServerCard = ({ title, codeSnippet, description, bgColor = "bg-white" }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${bgColor}`}>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto mb-3">
        <code>{codeSnippet}</code>
      </pre>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServerCard;
