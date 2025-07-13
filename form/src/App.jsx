import React, { useState } from "react";
import AppRoutes1 from "./AppRoutes/AppRoutes1";
import AppRoutes2 from "./AppRoutes/AppRoutes2";
import AppRoutes3 from "./AppRoutes/AppRoutes3";
import AppRoutes4 from "./AppRoutes/AppRoutes4";


const App = () => {
  const [selectedLayout, setSelectedLayout] = useState("layout1");

  const renderSelectedRoutes = () => {
    switch (selectedLayout) {
      case "layout1":
        return <AppRoutes1 />;
      case "layout2":
        return <AppRoutes2 />;
      case "layout3":
        return <AppRoutes3 />;
      case "layout4":
        return <AppRoutes4 />;
      default:
        return <AppRoutes1 />;
    }
  };

  return (
    <div>
      <div className="flex gap-4 p-4 bg-slate-100 border-b">
        <button
          onClick={() => setSelectedLayout("layout1")}
          className={`px-4 py-2 rounded ${
            selectedLayout === "layout1" ? "bg-slate-600 text-white" : "bg-white"
          }`}
        >
          Layout 1
        </button>
        <button
          onClick={() => setSelectedLayout("layout2")}
          className={`px-4 py-2 rounded ${
            selectedLayout === "layout2" ? "bg-slate-600 text-white" : "bg-white"
          }`}
        >
          Layout 2
        </button>
        <button
          onClick={() => setSelectedLayout("layout3")}
          className={`px-4 py-2 rounded ${
            selectedLayout === "layout3" ? "bg-slate-600 text-white" : "bg-white"
          }`}
        >
          Layout 3
        </button>
        <button
          onClick={() => setSelectedLayout("layout4")}
          className={`px-4 py-2 rounded ${
            selectedLayout === "layout4" ? "bg-slate-600 text-white" : "bg-white"
          }`}
        >
          Layout 4
        </button>
      </div>


      {renderSelectedRoutes()}
    </div>
  );
};

export default App;
