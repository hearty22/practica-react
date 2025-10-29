import "./Register.css"
export const Register = () => {




  return (
    <div className='register-container'>
        <h2>Register</h2>
    <form id="register-form">
        <div class="form-group">
          <label for="lastname">lastname</label>
          <input
            type="lastname"
            id="lastname"
            name="lastname"
            required
          />
        </div>
        <div class="form-group">
          <label for="firstname">firstname</label>
          <input
            type="firstname"
            id="firstname"
            name="firstname"
            required
          />
        </div>
        <div class="form-group">
          <label for="username">username</label>
          <input
            type="username"
            id="username"
            name="username"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
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
              required
            />
          </div>
        </div>
        <button type="submit" class="submit-btn" disabled>
          hecho

        </button>
      </form>
    </div>
  )
};
