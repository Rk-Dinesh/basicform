import React from 'react';

const Card = ({ title, description, icon, bgColor = 'bg-white' }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${bgColor}`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
