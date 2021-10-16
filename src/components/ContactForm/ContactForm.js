import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  getAllContacts,
} from '../../redux/contacts/contacts-operations';

// import { getItems } from '../../redux/contacts/contacts-selectors';

import s from './ContactForm.module.css';

// import Label from '../Label';
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
    dispatch(addContact(data));
    console.log(data);
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

      <button onClick={() => dispatch(getAllContacts())} type="button">
        cont
      </button>
    </form>
  );
};

export default ContactForm;
