import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  // console.dir(useForm);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="e-mail" {...register('login', { required: true })} />
      {/* include validation with required or other standard HTML validation rules */}
      <input
        placeholder="password"
        {...register('password', { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
export default RegisterPage;
