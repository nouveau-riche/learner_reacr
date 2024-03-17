import axios from 'axios';
import {Platform} from 'react-native';

import {ApiConstants} from './constants';
import Snackbar from 'react-native-snackbar';
import {setUserXAcessToken} from '../persistent/persistent';
import {LoginResponse} from '../modals/login_respose';
import {RegisterResponse} from '../modals/register_response';
import {OtpResponse} from '../modals/otp_response';
import {BaseResponse} from '../modals/base_response';

axios.defaults.baseURL = ApiConstants.baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.validateStatus = () => true;

export const loginUserApi = async ({
  email,
  password,
  navigation,
}: {
  email: string;
  password: string;
  navigation: any;
}) => {
  try {
    const response = await axios.post(ApiConstants.loginUser, {
      user_email: email,
      password: password,
      deviceOS: Platform.OS.toUpperCase(),
    });

    console.log('This is response: ', response.data);

    if (response.status === 200) {
      const data = response.data as LoginResponse;

      setUserXAcessToken(data['x-access_token']);
      navigation.replace('Bottom Nav Screen');
    } else {
      const data = response.data as BaseResponse;

      Snackbar.show({
        text: data.description,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const checkEmailRegister = async ({
  email,
  name,
  password,
  navigation,
}: {
  email: string;
  name: string;
  password: string;
  navigation: any;
}) => {
  try {
    const response = await axios.post(ApiConstants.checkEmailRegister, {
      user_email: email,
    });

    console.log('This is response: ', response.data);

    if (response.status === 200) {
      const data = response.data as OtpResponse;

      navigation.navigate('Otp Screen', {
        otp: data.otp,
        name: name,
        password: password,
        email: email,
      });
    } else {
      const data = response.data as BaseResponse;

      Snackbar.show({
        text: data.message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async ({
  email,
  name,
  password,
  navigation,
}: {
  email: string;
  name: string;
  password: string;
  navigation: any;
}) => {
  try {
    const response = await axios.post(
      ApiConstants.baseUrl + ApiConstants.registerUser,
      {
        user_email: email,
        name: name,
        password: password,
        deviceOS: Platform.OS.toUpperCase(),
      },
    );

    console.log('This is response: ', response.data);

    if (response.status === 201) {
      const data = response.data as RegisterResponse;

      setUserXAcessToken(data['x-access-token']);
      navigation.navigate('Bottom Nav Screen');
    } else {
      const data = response.data as BaseResponse;
      Snackbar.show({
        text: data.message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
    }
  } catch (error) {
    console.log(error);
  }
};
