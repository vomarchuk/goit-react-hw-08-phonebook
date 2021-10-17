import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="e-mail"
        {...register('email', {
          required: true,
        })}
      />
      <input
        type="password"
        autoComplete="off"
        placeholder="password"
        {...register('password', {
          required: true,
        })}
      />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
export default LoginPage;
