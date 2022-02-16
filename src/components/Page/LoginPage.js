import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import logInIcon from '../../images/login.svg';
import emailPattern from '../../validationSchemas';

import s from './Pages.module.css';
const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
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
          pattern: {
            value: emailPattern,
            message: `Is not a valid email address`,
          },
        })}
      />
      {errors.email && getValues('email') && (
        <p className={s['notification--error']}>{errors.email.message}</p>
      )}

      <input
        className={s.input}
        type="password"
        autoComplete="off"
        placeholder="password"
        {...register('password', {
          required: 'You must specify a password',
          minLength: {
            value: 8,
            message: 'Password must have at least 8 characters',
          },
        })}
      />
      {errors.password && (
        <p className={s['notification--error']}>{errors.password.message}</p>
      )}

      <Button className={s.btn_user} variant="success" type="submit">
        Log In
        <img className={s.icon} src={logInIcon} alt="login button" />
      </Button>
    </form>
  );
};
export default LoginPage;
