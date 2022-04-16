import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  filter: '',
  isDeleting: {
    id: null,
    status: false,
  },
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [contactsOperations.changeFilter.fulfilled](state, action) {
      state.filter = action.payload;
    },
    [contactsOperations.deleteContact.pending](state, action) {
      state.isDeleting = {
        id: action.meta.arg,
        status: true,
      };
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.meta.arg
      );
      state.isDeleting = initialState.isDeleting;
    },
  },
});

export default contactSlice.reducer;
