// import { useSelector, useDispatch } from 'react-redux';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
const ContactsPage = () => {
  const contactsLength = 0;
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {contactsLength > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      ) : (
        <>
          <h2>Phone book is emoty</h2>
        </>
      )}
    </>
  );
};

export default ContactsPage;
