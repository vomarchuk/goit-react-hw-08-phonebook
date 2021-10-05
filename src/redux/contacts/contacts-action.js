import { createAction } from '@reduxjs/toolkit';

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSuccess = createAction('contacts/addContactsSuccess');
export const addContactsError = createAction('contacts/addContactsError');

export const removeContactRequest = createAction(
  'contacts/removeContactRequest',
);
export const removeContactSuccess = createAction(
  'contacts/removeContactSuccess',
);
export const removeContactError = createAction('contacts/removeContactError');

export const getContactsRequest = createAction('contacts/getContactsRequest');
export const getContactsSuccess = createAction('contacts/getContactsSuccess');
export const getContactsError = createAction('contacts/getContactsError');

export const changeFilter = createAction('contacts/filter');
