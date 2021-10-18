import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import contactsOperations from '../../redux/contacts/contacts-operations';
import contactSelectors from '../../redux/contacts/contacts-selectors';
import deleteIcon from '../../images/delete.svg';
import { Button } from 'react-bootstrap';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactSelectors.getFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.getAllContacts()), [dispatch]);

  return (
    <>
      <ul className={s.list}>
        {contacts?.map(item => {
          const { id, name, number } = item;
          return (
            <li key={id} className={s.item}>
              {name}: {number}
              <Button
                variant="danger"
                className={s.btn__delete}
                type="button"
                onClick={() => dispatch(contactsOperations.removeContact(id))}
              >
                <img src={deleteIcon} alt="" />
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
