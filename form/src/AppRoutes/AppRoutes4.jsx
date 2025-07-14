import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import BasicForm1 from "../pages/forms/BasicForm1";
import BasicForm2 from "../pages/forms/BasicForm2";
import Layout3 from "../pages/layout/Layout3";
import NotFound from "../pages/NotFound";
import UseState from "../pages/Hooks/UseState";
import UseEffect from "../pages/Hooks/UseEffect";
import Props from "../pages/Hooks/Props";
import AxiosVsFetch from "../pages/Hooks/AxiosFetch";
import ExpressInfo from "../pages/Backend/ExpressInfo";
import BackendStructure from "../pages/Backend/BackendStructure";
import UserModel from "../pages/Backend/UserModel";
import ServiceComponent from "../pages/Backend/ServiceComponent";
import ControllerComponent from "../pages/Backend/ControllerComponent";
import RouterComponent from "../pages/Backend/RouterComponent";
import MongoConfig from "../pages/Backend/ConfigComponent";
import ApiComponent from "../pages/Backend/ApiComponent";

const AppRoutes4 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout3 />}>
          <Route index element={<Home />} />
          <Route path="form1" element={<BasicForm1 />} />
          <Route path="form2" element={<BasicForm2 />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/props" element={<Props />} />
          <Route path="/axiosvsfetch" element={<AxiosVsFetch />} />
          <Route path="/backend" element={<BackendStructure />}/>
          <Route path="/express" element={<ExpressInfo />} />
          <Route path="/db" element={<MongoConfig />} />
          <Route path="/model" element={<UserModel />}/>
          <Route  path="/service" element={<ServiceComponent />}/>
          <Route  path="/controller" element={<ControllerComponent />}/>
          <Route  path="/router" element={<RouterComponent />}/>
          <Route  path="/api" element={<ApiComponent />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes4;
