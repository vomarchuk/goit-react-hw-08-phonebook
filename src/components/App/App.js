// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';

// import { getItemslength } from '../../redux/contacts/contacts-selectors';
// import { fetchContacts } from '../../redux/contacts/contacts-operations';

// import s from './App.module.css';
import Section from '../Section';
import NavBar from '../NavBar';

//Page
import HomePage from '../Page/HomePage';
import LoginPage from '../Page/LoginPage';
import RegisterPage from '../Page/RegisterPage';
import ContactsPage from '../Page/ContactsPage';
//

// import ContactForm from '../ContactForm';
// import ContactList from '../ContactList/';
// import Filter from '../Filter';

const App = () => {
  // const contactsLength = useSelector(getItemslength);
  // const dispatch = useDispatch();

  // useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <>
      <Section>
        <NavBar />
      </Section>

      <Switch>
        <Route path="/" exact>
          <Section>
            <HomePage />
          </Section>
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <Section>
            <LoginPage />
          </Section>
        </Route>
        <Route path="/contacts">
          <Section>
            <ContactsPage />
          </Section>
        </Route>
      </Switch>

      {/* 
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
      )} */}
    </>
  );
};

export default App;
