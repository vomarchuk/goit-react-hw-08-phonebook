import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const AuthNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedId);

  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};
export default AuthNav;
