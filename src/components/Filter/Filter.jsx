import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Label, Search } from './Filter.styled';
import { contactsOperations } from 'redux/contacts';
import { useState } from 'react';

function Filter() {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  const handleChange = event => {
    const filter = event.target.value;
    setFilter(filter);
    dispatch(contactsOperations.changeFilter(event.target.value));
  };

  return (
    <Label>
      Filter by name:
      <Search type="text" value={filter} onChange={handleChange} />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
