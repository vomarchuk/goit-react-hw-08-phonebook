import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import authOperations from '../redux/auth/auth-operations';

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <span>Wellcome {userName}</span>
      <button onClick={() => dispatch(authOperations.logOut())} type="button">
        logout
      </button>
    </div>
  );
};
export default UserMenu;
