import { useForm } from "../hooks/useForm";
import "../css/LoginPage.css";
import { useNavigate } from "react-router";
import { Link } from "react-router";
export const Login = () => {
  const navigate = useNavigate();
  const { formData, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      return;
    }
    handleReset();
    localStorage.setItem("isLogged", true);
    navigate("/home");
  };
  return (
    <div className="register-container">
      <h2>Login</h2>
      <form id="register-form">
        <div className="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="password">Contraseña</label>
          <div class="password-wrapper">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" onClick={handleSubmit} className="submit-btn">
          Login
        </button>
        <p>
          ¿No tienes una cuenta?  
          <Link to="/register"> Registrate</Link>
        </p>
      </form>
    </div>
  );
};
