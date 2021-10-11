import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const userRegister = createAsyncThunk(
  'auth/register',
  async credentails => {
    try {
      const { data } = await axios.post('/users/signup', credentails);
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const logIn = createAsyncThunk('auth/login', async credentails => {
  try {
    const { data } = await axios.post('/users/login', credentails);
    return data;
  } catch (error) {
    throw error;
  }
});
