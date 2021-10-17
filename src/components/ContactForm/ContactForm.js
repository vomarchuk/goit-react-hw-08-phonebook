import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';

import s from './ContactForm.module.css';
import options from '../options';

const ContactForm = () => {
  const dispatch = useDispatch();

  const { name, number } = options;
  const {
    register,
    handleSubmit,
    reset,
    // formState: { error },
  } = useForm();

  const onSubmit = data => {
    dispatch(contactsOperations.addContact(data));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="name"
        {...register('name', {
          required: true,
          pattern: name.pattern,
        })}
      />

      <input
        placeholder="number"
        {...register('number', {
          required: true,
          pattern: number.pattern,
        })}
      />
      <input type="submit" className={s.button} />

      <button
        onClick={() => dispatch(contactsOperations.getAllContacts())}
        type="button"
      >
        cont
      </button>
    </form>
  );
};

export default ContactForm;
