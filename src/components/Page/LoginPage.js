import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import logInIcon from '../../images/login.svg';
import s from './Pages.module.css';
const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(authOperations.logIn(data));
    reset();
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={s.input}
        placeholder="e-mail"
        {...register('email', {
          required: true,
        })}
      />
      <input
        className={s.input}
        type="password"
        autoComplete="off"
        placeholder="password"
        {...register('password', {
          required: true,
        })}
      />
      {errors.password && <span>This field is required</span>}
      <Button className={s.btn_user} variant="success" type="submit">
        Log In
        <img className={s.icon} src={logInIcon} alt="login button" />
      </Button>
    </form>
  );
};
export default LoginPage;
