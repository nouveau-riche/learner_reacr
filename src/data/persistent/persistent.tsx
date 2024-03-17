import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_X_ACCESS_TOKEN = 'USER_X_ACCESS_TOKEN';

export const setUserXAcessToken = async (value: string) => {
  try {
    await AsyncStorage.setItem(USER_X_ACCESS_TOKEN, value);
  } catch (error) {
    Snackbar.show({
      text: 'Error while saving token',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'red',
    });
  }
};

export const getUserXAcessToken = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_X_ACCESS_TOKEN);
    console.log('token', value);
    return value;
  } catch (error) {
    Snackbar.show({
      text: 'Error while getting token',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'red',
    });
  }
};

export const clearPersistent = async () => {
  try {
    await AsyncStorage.removeItem(USER_X_ACCESS_TOKEN);
  } catch (error) {
    Snackbar.show({
      text: 'Error while deleting token',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'red',
    });
  }

  console.log('Done.');
};
