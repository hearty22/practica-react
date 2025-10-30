import { useForm } from "../hooks/UseForm";

export const Login = ({handleLogin}) => {
    const {formData,handleChange ,handleReset} = useForm({
        username: "",
        password: ""
    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        handleLogin(formData.username),
        handleReset();
    }
  return (
    <div className='register-container'>
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
            hecho
          </button>
        </form>
    </div>
  )
};

