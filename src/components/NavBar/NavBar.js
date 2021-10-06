import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = ({ children }) => {
  return (
    <nav className={s.nav_bar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
};

export default NavBar;
