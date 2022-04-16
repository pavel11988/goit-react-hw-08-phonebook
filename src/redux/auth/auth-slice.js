import { createSlice } from '@reduxjs/toolkit';
import authOpertions from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoadingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOpertions.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOpertions.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOpertions.logIn.rejected](state, action) {
      state.isLoggedIn = false;
    },
    [authOpertions.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOpertions.fetchCurrentUser.pending](state, action) {
      state.isLoadingUser = true;
    },
    [authOpertions.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoadingUser = false;
    },
    [authOpertions.fetchCurrentUser.rejected](state, action) {
      state.isLoadingUser = false;
    },
  },
});

export default authSlice.reducer;
