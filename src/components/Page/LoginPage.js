import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="e-mail" {...register('email', { required: true })} />
      <input
        autoComplete="off"
        placeholder="password"
        {...register('password', { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
export default LoginPage;
