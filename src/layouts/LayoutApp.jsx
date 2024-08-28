import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Subheader from "../components/Subheader";

const Layoutapp = () => {
  return (
    <div className="wrapper">
      <Header />
      <Subheader />
      <div className="app">
        <Outlet />
      </div>
    </div>
  );
};

export default Layoutapp;
