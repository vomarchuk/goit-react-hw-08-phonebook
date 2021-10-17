import s from './NavBar.module.css';

import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import Navigations from '../Navigations';

const NavBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.nav_bar}>
      <Navigations />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default NavBar;
