import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = ({ children }) => {
  return (
    <nav className={s.nav_bar}>
      <ul className={s.nav_list}>
        <li className={s.page_items}>
          <NavLink to="/" className={s.page_item}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={s.page_item}>
            Contacts
          </NavLink>
        </li>
        <li className={s.login_items}>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
