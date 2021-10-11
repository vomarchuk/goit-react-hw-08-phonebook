import { createSlice } from '@reduxjs/toolkit';

import * as authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.userRegister.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action?.error?.message;
    },
  },
});

// const user = createReducer(initialState, {
//   [registerSuccess]: (state, { payload }) => [state, ...payload],
// });

// const isLoggedIn = createReducer(false, {
//   [registerSuccess]: () => true,
//   [registerRequest]: () => false,
//   [registerError]: () => false,
// });

// const error = createReducer(null, {
//   [registerError]: (_, { payload }) => payload,
//   [registerRequest]: () => null,
// });

// export default combineReducers({
//   user,
//   isLoggedIn,
//   error,
// });

export default authSlice.reducer;
