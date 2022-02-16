import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import sendIcon from '../../images/send.svg';
import emailPattern from '../../validationSchemas';
import s from './Pages.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    getValues,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = data => {
    dispatch(authOperations.userRegister(data));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={s.input}
        placeholder="name"
        {...register('name', { required: true })}
      />
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
        autoComplete="off"
        type="password"
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

      <input
        className={s.input}
        autoComplete="off"
        type="password"
        placeholder="repeat password"
        {...register('password_repeat', {
          validate: value =>
            value === password.current || 'The passwords do not match',
        })}
      />
      {errors.password_repeat && (
        <p className={s['notification--error']}>
          {errors.password_repeat.message}
        </p>
      )}

      <Button className={s.btn_user} variant="success" type="submit">
        Register
        <img className={s.icon} src={sendIcon} alt="register button" />
      </Button>
    </form>
  );
};
export default RegisterPage;
