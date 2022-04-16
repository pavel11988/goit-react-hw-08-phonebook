import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import contactsSelectors from 'redux/contacts/contacts-selectors';
// import { contactsOperations } from 'redux/contacts';
// import { useEffect } from 'react';

function ContactList() {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);

  // useEffect(() => {}, [contacts]);

  return (
    <List>
      {contacts.length !== 0 &&
        contacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
