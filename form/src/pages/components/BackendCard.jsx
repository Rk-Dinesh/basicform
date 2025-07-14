import React from "react";

const BackendCard = ({ title, description, example, bgColor = "bg-white" }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${bgColor}`}>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      {example && (
        <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-x-auto">
          <code>{example}</code>
        </pre>
      )}
    </div>
  );
};

export default BackendCard;
