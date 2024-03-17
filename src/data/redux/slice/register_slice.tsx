import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    name: '',
    email: '',
    password: '',
    isLoading: false,
    otp: '',
  },
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    updateIsLoading: state => {
      state.isLoading = !state.isLoading;
    },
    updateOtp: (state, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
  },
});

export const {
  updateName,
  updateEmail,
  updatePassword,
  updateIsLoading,
  updateOtp,
} = registerSlice.actions;

export default registerSlice.reducer;
