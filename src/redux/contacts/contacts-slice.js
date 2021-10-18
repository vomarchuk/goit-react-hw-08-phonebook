import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getAllContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [contactsOperations.removeContact.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    [contactsOperations.filter.fulfilled](state, action) {
      state.filter = action.payload;
    },
  },
});

export default contactsSlice.reducer;
