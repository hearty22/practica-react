import "./Register.css"
export const Register = () => {

  return (
    <div className='RegisterContainer'>
        <form>
            <h2 className="formTitle">Register</h2>
            <label htmlFor="username">username</label> <br />
            <input type="text" id="username" name='username'/>
            <br />
            <label htmlFor="username">password</label> <br />
            <input type="text" id="password" name='password'/>
            <br /><br />
            <button>submit</button>
        </form>
    </div>
  )
};
