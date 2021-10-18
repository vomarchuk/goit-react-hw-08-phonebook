import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import s from './Pages.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={s.btn_box}>
      {isLoggedIn ? (
        <>
          <NavLink to="/contacts">
            <Button>Contacts</Button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className={s.link} to="/login">
            <Button className={s.btn} variant="success">
              Log In
            </Button>
          </NavLink>
          <NavLink className={s.link} to="/register">
            <Button className={s.btn} variant="primary">
              Register
            </Button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default HomePage;
