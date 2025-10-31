import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Register } from "../components/register";
import { Login } from "../components/Login";
import { useState } from "react";
export const App = () => {
  const [user, setUser] = useState("");
  const handleLogin = (username) =>{
    setUser(
      username
    )
  };
  const handleLogout = () =>{
    setUser("");
  }

  return (
    <BrowserRouter>
      <h1>¡Hola de nuevo {user || "anonimo "}!</h1>
      <button className="submit-btn" onClick={handleLogout}>Logout</button>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav>
      <div className="main-content-container">
        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login handleLogin={handleLogin}/>} /> {/* Default route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
