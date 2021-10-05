import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from './contacts-action';
import axios from 'axios';

const URL = 'http://localhost:4040';

export const fetchContacts = () => dispatch => {
  dispatch(getContactsRequest());
  axios
    .get(`${URL}/contacts`)
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch(error => dispatch(getContactsError(error)));
};
export const addContact = (name, number) => dispatch => {
  const item = {
    name,
    number,
  };
  dispatch(addContactsRequest());
  axios
    .post(`${URL}/contacts`, item)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

export const removeContact = id => dispatch => {
  dispatch(removeContactRequest);
  axios
    .delete(`${URL}/contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch(error => dispatch(removeContactError(error)));
};
