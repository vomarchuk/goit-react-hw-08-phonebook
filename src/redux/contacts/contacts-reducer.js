import { createSlice } from '@reduxjs/toolkit';
import * as contactsOperations from './contacts-operations';

const initialState = {
  items: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getAllContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
  },
});

// const items = createReducer([], {
//   [getContactsSuccess]: (_, { payload }) => payload,
//   [addContactsSuccess]: (state, { payload }) => [...state, payload],
//   [removeContactSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const isLoading = createReducer(false, {
//   [addContactsRequest]: () => true,
//   [addContactsSuccess]: () => false,
//   [addContactsError]: () => false,

//   [removeContactRequest]: () => true,
//   [removeContactSuccess]: () => false,
//   [removeContactError]: () => false,

//   [getContactsRequest]: () => true,
//   [getContactsSuccess]: () => false,
//   [getContactsError]: () => false,
// });

// const error = createReducer(null, {
//   [addContactsError]: (_, { payload }) => payload,
//   [addContactsRequest]: () => null,

//   [removeContactError]: (_, { payload }) => payload,
//   [removeContactRequest]: () => null,

//   [getContactsError]: (_, { payload }) => payload,
//   [getContactsRequest]: () => null,
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   filter,
//   isLoading,
//   error,
// });
export default contactsSlice.reducer;
