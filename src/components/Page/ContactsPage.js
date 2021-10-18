import ContactList from '../ContactList';
import Filter from '../Filter';
import ModalSAddContact from '../Modal/Modal';

import s from './Pages.module.css';
const ContactsPage = () => {
  return (
    <div className={s.contactsPage}>
      <h1 className={s.title}>Phonebook</h1>
      <ModalSAddContact />

      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
