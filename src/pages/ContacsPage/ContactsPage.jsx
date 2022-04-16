import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { ContactPageContainer } from './ContacsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ContactPageContainer>
      <h1>Contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </ContactPageContainer>
  );
};

export default ContactsPage;
