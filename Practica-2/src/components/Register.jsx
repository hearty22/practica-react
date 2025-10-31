import { useForm } from "../hooks/UseForm";
import "./Register.css"
export const Register = () => {
  let { formData, handleChange, handleReset } = useForm({
    lastname: "",
    firstname: "",
    username: "",
    email: "",
    password: ""
  });
  const { lastname, firstname, username, email, password } = formData;
  return (
    <div className='register-container'>
        <h2>Register</h2>
      <form id="register-form">
          <div className="form-group">
            <label htmlFor="lastname">lastname</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">firstname</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <div class="password-wrapper">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" onClick={handleReset} className="submit-btn">
            hecho
          </button>
        </form>
    </div>
  )
};
