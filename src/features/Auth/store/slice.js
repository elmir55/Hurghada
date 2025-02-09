import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './action';

const initialState = {
  login: {
    status: null,
    token: null,
    message: null,
  },
  register: {
    status: null,
    token: null,
    message: null,
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.login.status = 'SUCCESS';
        state.login.token = action.payload;
        state.login.message = null;
      })
      .addCase(login.pending, (state) => {
        state.login.status = 'PENDING';
        state.login.message = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.login.status = 'ERROR';
        state.login.message = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => { 
        state.register.status = 'SUCCESS';
        state.register.token = action.payload;
        state.register.message = null;
      })
      .addCase(register.pending, (state) => {
        state.register.status = 'PENDING';
        state.register.message = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.register.status = 'ERROR';
        state.register.message = action.payload;
      });
  },
});

export default authSlice.reducer;
