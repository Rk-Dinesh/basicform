import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import BasicForm1 from "../pages/forms/BasicForm1";
import BasicForm2 from "../pages/forms/BasicForm2";
import Layout2 from "../pages/layout/Layout2";
import NotFound from "../pages/NotFound";
import UseState from "../pages/Hooks/UseState";
import UseEffect from "../pages/Hooks/UseEffect";
import Props from "../pages/Hooks/Props";
import AxiosVsFetch from "../pages/Hooks/AxiosFetch";

const AppRoutes3 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout2 />}>
          <Route index element={<Home />} />
          <Route path="form1" element={<BasicForm1 />} />
          <Route path="form2" element={<BasicForm2 />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/props" element={<Props />} />
          <Route path="/axiosvsfetch" element={<AxiosVsFetch />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes3;
