import { createSlice } from '@reduxjs/toolkit';

import authOperations from './auth-operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isFechingCurrent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.fetchCurrentUser.pending](state, action) {
      state.isFechingCurrent = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFechingCurrent = false;
      state.error = null;
    },
    [authOperations.fetchCurrentUser.rejected](state, { error }) {
      state.isLoggedIn = false;
      state.isFechingCurrent = false;
      state.error = error?.message;
    },

    [authOperations.userRegister.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.userRegister.rejected](state, { error }) {
      state.isLoggedIn = false;
      state.error = error?.message;
    },

    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.logIn.rejected](state, { error }) {
      state.isLoggedIn = false;
      state.error = error?.message;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.logOut.rejected](state, { error }) {
      state.error = error?.message;
    },
  },
});

export default authSlice.reducer;
