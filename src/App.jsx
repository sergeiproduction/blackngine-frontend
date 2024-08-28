import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./scss/app.scss";

import LayoutMain from "./layouts/LayoutMain";

import NotFound from "./pages/NotFound";
// import Home from "./pages/Home";


function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const data = dispatch(fetchUser());
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>

      </Route>


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
