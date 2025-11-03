import React from "react";
import { Route, Routes } from "react-router";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { Home } from "../pages/Home";
export const AppRouter = () => {
  return (
    <Routes>
        
      <Route path="/" element={<PublicRoutes/>}>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
      </Route>
      <Route path="/" element={<PrivateRoutes/>}>
        <Route path="/home" element={<Home/>}/>
      </Route>
    </Routes>
  );
};
