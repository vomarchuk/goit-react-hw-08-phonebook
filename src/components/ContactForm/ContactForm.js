import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactSelectors from '../../redux/contacts/contacts-selectors';
import { Button } from 'react-bootstrap';
import addIcon from '../../images/add.svg';
import s from './ContactForm.module.css';

const ContactForm = ({ onHide }) => {
  const contacts = useSelector(contactSelectors.getItems);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const checkForReplays = newName => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase(),
    );
  };
  const onSubmit = data => {
    if (checkForReplays(data.name)) {
      console.log('replays');
      return;
    }

    dispatch(contactsOperations.addContact(data));
    onHide();
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={s.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        placeholder="name"
        {...register('name', {
          required: true,
        })}
      />
      <input
        className={s.input}
        placeholder="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        {...register('number', {
          required: true,
        })}
      />
      <Button variant="success" className={s.btn} type="submit">
        <img src={addIcon} alt="add new contact button" />
      </Button>
    </form>
  );
};

export default ContactForm;
