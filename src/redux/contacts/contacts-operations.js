import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contacts-action';

const URL = 'http://localhost:4040';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const removeContact = id => dispatch => {
  dispatch(removeContactRequest);
  axios
    .delete(`${URL}/contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch(error => dispatch(removeContactError(error)));
};

export const getAllContacts = createAsyncThunk('contacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    token.set(data.token);
    return data;
  } catch (error) {
    throw error;
  }
});

export const addContact = createAsyncThunk('contacts/add', async delails => {
  try {
    const { data } = await axios.post('/contacts', delails);
    token.set(data.token);
    return data;
  } catch (error) {
    throw error;
  }
});

// export const fetchContacts = () => dispatch => {
//   dispatch(getContactsRequest());
//   axios
//     .get(`${URL}/contacts`)
//     .then(({ data }) => dispatch(getContactsSuccess(data)))
//     .catch(error => dispatch(getContactsError(error)));
// };

// export const addContact = (name, number) => dispatch => {
//   const item = {
//     name,
//     number,
//   };
//   dispatch(addContactsRequest());
//   axios
//     .post(`${URL}/contacts`, item)
//     .then(({ data }) => dispatch(addContactsSuccess(data)))
//     .catch(error => dispatch(addContactsError(error)));
// };
