import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const fetchCurrentUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.auth.token;
    if (persisterToken === null) {
      return thunkAPI.rejectedWithValue();
      // return state!;
    }
    token.set(persisterToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      throw error;
    }
  },
);

const userRegister = createAsyncThunk('auth/register', async credentails => {
  try {
    const { data } = await axios.post('/users/signup', credentails);
    token.set(data.token);
    return data;
  } catch (error) {
    throw error;
  }
});
const logIn = createAsyncThunk('auth/login', async credentails => {
  try {
    const { data } = await axios.post('/users/login', credentails);
    token.set(data.token);
    return data;
  } catch (error) {
    throw error;
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    throw error;
  }
});

const authOperations = {
  userRegister,
  logIn,
  logOut,
  fetchCurrentUser,
};
export default authOperations;
