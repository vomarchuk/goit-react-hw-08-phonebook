import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItemslength } from '../../redux/contacts/contacts-selectors';
import { fetchContacts } from '../../redux/contacts/contacts-operations';

import s from './App.module.css';
import NavBar from '../NavBar';
import Container from '../Container';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList/';
import Filter from '../Filter';

const App = () => {
  const contactsLength = useSelector(getItemslength);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <Container>
      <NavBar />

      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      {contactsLength > 0 ? (
        <>
          <h2 className={s.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      ) : (
        <>
          <h2 className={s.title}>Phone book is empty</h2>
        </>
      )}
    </Container>
  );
};

export default App;
