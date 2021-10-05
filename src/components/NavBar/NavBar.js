import s from './NavBar.module.css';

const NavBar = ({ children }) => {
  return <div className={s.nav_bar}>nav bar{children}</div>;
};

export default NavBar;
