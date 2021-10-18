import { NavLink } from 'react-router-dom';
import s from './NavBar/NavBar.module.css';
const AuthNav = () => {
  return (
    <div className={s.auth_nav}>
      <NavLink className={`${s.nav_item} `} to="/register">
        Register
      </NavLink>
      <NavLink className={`${s.nav_item} `} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
