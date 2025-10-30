import React, { useState } from "react";
import { Register } from "../components/register";
import { Login } from "../components/Login";
export const App = () => {

  return (
    <>
      <h1>¡Hola de nuevo {}!</h1>
      <button>Logout</button>
      <div className="main-content-container">
        <Register />
        <Login/>
      </div>
    </>
  );
};
