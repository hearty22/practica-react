import { Register } from "../components/register";
import { Login } from "../components/Login";
import { useState } from "react";
export const App = () => {
  const [user, setUser] = useState("");
  const handleLogin = (username) =>{
    setUser(
      username
    )
  }

  return (
    <>
      <h1>¡Hola de nuevo {user || "anonimo "}!</h1>
      <button className="submit-btn">Logout</button>
      <div className="main-content-container">
        <Register />
        <Login handleLogin={handleLogin}/>
      </div>
    </>
  );
};
