import React from "react";
import Error404 from "../pages/Error404";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";


const PageHolder = () => {
  return (
    <div className="page-holder bg-gray-100">
      <div className="px-lg-4 px-xl-5 container-fluid" id="page-container">
        <Routes>
          <Route
            exact
            path="/error404"
            element={<Error404></Error404>}
          ></Route>
          <Route exact path="/" element={<Dashboard></Dashboard>}></Route>
          <Route
            exact
            path="/tokens"
            element={<Error404></Error404>}
          ></Route>
          <Route
            exact
            path="pairs"
            element={<Error404></Error404>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default PageHolder;
