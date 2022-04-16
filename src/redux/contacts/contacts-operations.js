import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    //обработка ошибки
    alert('Error request', error.message);
    throw error;
  }
});

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const contact = {
      name,
      number,
    };

    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      //обработка ошибки
      alert('Error adding contact', error.message);
      throw error;
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async credentials => {
    try {
      const { data } = await axios.delete(`/contacts/${credentials}`);
      return data;
    } catch (error) {
      //обработка ошибки
      alert('Error deleting contact', error.message);
      throw error;
    }
  }
);

const changeFilter = createAsyncThunk(
  'contacts/changeFilter',
  async filter => filter
);

const contactsOperations = {
  fetchContacts,
  addContact,
  changeFilter,
  deleteContact,
};

export default contactsOperations;
