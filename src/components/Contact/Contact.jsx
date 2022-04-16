import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import Loader from 'components/Loader/Loader';

import {
  ContactContainer,
  Info,
  Name,
  Telephone,
  Button,
} from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isContactDeleting = useSelector(state => state.contacts.isDeleting);

  const isDeleting = isContactDeleting.id === id && isContactDeleting.status;

  return (
    <ContactContainer>
      <Info>
        <Name>Name: {name}</Name>
        <Telephone>Tel: {number}</Telephone>
      </Info>
      <Button
        type="button"
        onClick={() => {
          dispatch(contactsOperations.deleteContact(id));
        }}
      >
        {isDeleting ? <Loader /> : 'Delete'}
      </Button>
    </ContactContainer>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
