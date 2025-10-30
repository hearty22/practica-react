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
  return (
    <div className='register-container'>
        <h2>Register</h2>
      <form id="register-form">
          <div class="form-group">
            <label for="lastname">lastname</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label for="firstname">firstname</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label for="username">username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
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
          <button type="submit" onClick={handleReset} class="submit-btn">
            hecho
          
          </button>
        </form>
    </div>
  )
};
