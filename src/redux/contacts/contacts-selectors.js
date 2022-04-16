const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

const getFilteredContacts = state => {
  const filter = getFilter(state);
  const contacts = getAllContacts(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const contactsSelectors = {
  getFilter,
  getFilteredContacts,
  getAllContacts,
};

export default contactsSelectors;
