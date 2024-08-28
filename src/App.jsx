import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./scss/app.scss";

import LayoutMain from "./layouts/LayoutMain";
import LayoutApp from "./layouts/LayoutApp";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Сonfigurator from "./pages/Сonfigurator";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const data = dispatch(fetchUser());
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contacts />} />
      </Route>

      <Route path="app" element={<LayoutApp />}>
        <Route path="configurator" element={<Сonfigurator />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
