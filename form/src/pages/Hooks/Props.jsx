import React from "react";
import Card from "../components/Card";

const Props = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
        🧩 Props Reusable Components
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="🚀 Fast Performance"
          description="This app is blazing fast thanks to React optimization."
          bgColor="bg-green-50"
        />

        <Card
          title="🔒 Secure"
          description="Security is our top priority with end-to-end protection."
          icon="🔐"
          bgColor="bg-slate-50"
        />

        <Card
          title="⚙️ Easy Integration"
          description="Integrates well with APIs and backend systems."
          icon="🔧"
          bgColor="bg-yellow-50"
        />
      </div>
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-md mt-6">
        <code className="block text-sm text-gray-700 whitespace-pre-wrap">
          {` import React from 'react';
            
            const Card = ({ title, description, icon, bgColor = 'bg-white' }) => {
              return (
                <div className={p-6 rounded-lg shadow-md {bgColor}}>
                  <div className="text-3xl mb-2">{icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              );
            };
            
            export default Card;
--------------------------------------------------------------------------------------

Props are used to pass data from parent to child components in React.
They allow you to make components reusable and customizable.

Example usage of the Card component:

---------------------------------------------------------------------------------------

        <Card
          title="🚀 Fast Performance"
          description="This app is blazing fast thanks to React optimization."
          bgColor="bg-green-50"
        />

----------------------------------------------------------------------------------------        
            `}
        </code>
      </div>
    </div>
  );
};

export default Props;
