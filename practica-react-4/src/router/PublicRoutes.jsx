import React from "react";

import { Outlet } from "react-router";
import { Navigate } from "react-router";
export const PublicRoutes = () => {
  const isLogged = localStorage.getItem("isLogged");
  console.log(isLogged);
  return !isLogged ? <Outlet /> : <Navigate to="/home" />;
};
