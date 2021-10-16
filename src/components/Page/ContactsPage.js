import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contacts-operations';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
const ContactsPage = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllContacts());
  // }, []);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {/* <ContactList /> */}
    </>
  );
};

export default ContactsPage;
