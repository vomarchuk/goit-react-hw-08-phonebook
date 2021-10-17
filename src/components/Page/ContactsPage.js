import { useSelector } from 'react-redux';
import contactSelectors from '../../redux/contacts/contacts-selectors';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

const ContactsPage = () => {
  const contacts = useSelector(contactSelectors.getItems);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
