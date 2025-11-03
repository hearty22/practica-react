import React from "react";
import { Route, Routes } from "react-router";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { AppRouter } from "./router/AppRouter";
export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<AppRouter />} />
    </Routes>
  );
};
