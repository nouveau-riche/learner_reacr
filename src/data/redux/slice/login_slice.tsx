import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import Snackbar from 'react-native-snackbar';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    isLoading: false,
  },
  reducers: {
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    updateIsLoading: state => {
      state.isLoading = !state.isLoading;
    },
    loginUser: (state, action: PayloadAction) => {

      // verify email with regex
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(state.email)) {
        Snackbar.show({
          text: 'Enter a valid email',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
        return;
      }

      // verify password
      if (state.password.length < 6) {
        Snackbar.show({
          text: 'Password should be of atleast 6 characters',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
        return;
      }

      // start loading
      updateIsLoading();
    },
  },
});

export const {updateEmail, updatePassword, updateIsLoading, loginUser} =
  loginSlice.actions;

export default loginSlice.reducer;
