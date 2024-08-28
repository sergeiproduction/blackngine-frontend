import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./scss/app.scss";

import LayoutMain from "./layouts/LayoutMain";
import Layoutapp from "./layouts/LayoutApp";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const data = dispatch(fetchUser());
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route path="" element={<Home />} />
      </Route>

      <Route path="/app" element={<Layoutapp />}></Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
