import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home/Home";
import BasicForm1 from "../pages/forms/BasicForm1";
import BasicForm2 from "../pages/forms/BasicForm2";
import NotFound from "../pages/NotFound";
import UseState from "../pages/Hooks/UseState";
import UseEffect from "../pages/Hooks/UseEffect";
import Props from "../pages/Hooks/Props";
import AxiosVsFetch from "../pages/Hooks/AxiosFetch";

const AppRoutes1 = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-gray-800 p-4 text-white">
          <ul className="flex gap-6 justify-start font-semibold">
            <li>
              <Link to="/" className=" border px-4 py-1.5 rounded-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/form1" className="border px-4 py-1.5 rounded-lg">
                Basic Form 1
              </Link>
            </li>
            <li>
              <Link to="/form2" className="border px-4 py-1.5 rounded-lg">
                Basic Form 2
              </Link>
            </li>
            <li>
              <Link to="/useState" className="border px-4 py-1.5 rounded-lg">
                useState
              </Link>
            </li>
            <li>
              <Link to="/useEffect" className="border px-4 py-1.5 rounded-lg">
                useEffect
              </Link>
            </li>
            <li>
              <Link to="/props" className="border px-4 py-1.5 rounded-lg">
                Props
              </Link>
            </li>
            <li>
              <Link to="/axiosvsfetch" className="border px-4 py-1.5 rounded-lg">
                Axios vs Fetch
              </Link>
              </li>
          </ul>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form1" element={<BasicForm1 />} />
            <Route path="/form2" element={<BasicForm2 />} />
            <Route path="/useState" element={<UseState />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/props" element={<Props />} />
            <Route path="/axiosvsfetch" element={<AxiosVsFetch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes1;
