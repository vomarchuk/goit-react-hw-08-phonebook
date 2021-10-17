import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

// const getItemslength = state => {
//   const contacts = getItems(state);
//   return contacts.length;
// };

//  const getFilteredContacts = state => {
//   const contacts = getItems(state);
//   const filter = getFilter(state);

//   const normalizedFilter = filter.toLowerCase();
//   return (
//     contacts &&
//     contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
//   );
// };

//  const removeContacts = state => {
// const contacts = getItems(state);
// const filter = getFilter(state);
// };

// минимизация
const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactSelectors = {
  getItems,
  getFilter,
  // getItemslength,
  getFilteredContacts,
};

export default contactSelectors;
