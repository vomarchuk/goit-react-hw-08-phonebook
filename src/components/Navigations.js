import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

import s from './NavBar/NavBar.module.css';

const Navigations = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.navigations}>
      <NavLink className={s.nav_item} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.nav_item} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigations;
