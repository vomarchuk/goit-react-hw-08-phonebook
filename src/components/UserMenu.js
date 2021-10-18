import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import authOperations from '../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import logOutIcon from '../images/logout.svg';
import s from './NavBar/NavBar.module.css';
const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div className={s.user_menu}>
      <span className={s.s}>Wellcome, {userName}</span>
      <Button
        className={s.logOutBtn}
        variant="danger"
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
      >
        <img
          className={s.icon}
          src={logOutIcon}
          width="20"
          height="20"
          alt="logout button"
        />
      </Button>
    </div>
  );
};
export default UserMenu;
