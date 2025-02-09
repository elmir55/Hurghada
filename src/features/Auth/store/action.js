import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.login(data);
      localStorage.setItem('token', res.data.token)
      return res.data.token; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register", 
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.register(data);
      return res.data.token; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
