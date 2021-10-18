import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

//  const getFilteredContacts = state => {
//   const contacts = getItems(state);
//   const filter = getFilter(state);

//   const normalizedFilter = filter.toLowerCase();
//   return (
//     contacts &&
//     contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
//   );
// };

// миминизация
const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts?.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(filter),
    );
  },
);

const contactSelectors = {
  getItems,
  getFilter,
  getFilteredContacts,
};

export default contactSelectors;
