import { Link } from 'react-router';
import '../css/Navbar.css';
import { useForm } from '../hooks/useForm';

export const Navbar = () => {
  const {Loggout } = useForm();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">Mi Api con react</Link>
        <div className="block lg:hidden">
          <button className="navbar-toggler">
            <svg className="navbar-toggler-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        <div className="navbar-menu" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li>
              <button onClick={Loggout} className="logout-button">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};