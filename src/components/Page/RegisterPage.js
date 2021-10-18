import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import sendIcon from '../../images/send.svg';
import s from './Pages.module.css';
const RegisterPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
        {...register('email', { required: true })}
      />
      <input
        className={s.input}
        autoComplete="off"
        placeholder="password"
        {...register('password', { required: true })}
      />
      {errors.password && <span>This field is required</span>}
      <Button className={s.btn_user} variant="success" type="submit">
        Register
        <img className={s.icon} src={sendIcon} alt="register button" />
      </Button>
    </form>
  );
};
export default RegisterPage;
