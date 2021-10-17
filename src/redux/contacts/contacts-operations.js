import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getAllContacts = createAsyncThunk('contacts', async () => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch (error) {
    throw error;
  }
});

const addContact = createAsyncThunk('contacts/add', async details => {
  try {
    const { data } = await axios.post('/contacts', details);
    return data;
  } catch (error) {
    throw error;
  }
});

const removeContact = createAsyncThunk('contact/remove', async contactId => {
  try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    throw error;
  }
});

const filter = createAsyncThunk('/auth/filter', value => value);

const contactsOperations = {
  getAllContacts,
  addContact,
  removeContact,
  filter,
};
export default contactsOperations;
