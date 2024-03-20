import {useEffect, useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/data/redux/store/store';

import LoginScreen from './src/screens/auth/login/index';
import SignupScreen from './src/screens/auth/signup';
import OtpScreen from './src/screens/auth/otp';
import {getUserXAcessToken} from './src/data/persistent/persistent';
import BottomNavScreen from './src/screens/bottom_nav';

const Stack = createNativeStackNavigator();

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const checkUserLogin = async () => {
    const token = await getUserXAcessToken();
    if (token !== null) {
      setShowLogin(false);
    }
  };

  useEffect(() => {
    checkUserLogin();
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {showLogin ? (
            <Stack.Screen
              name="Login Screen"
              component={LoginScreen}
              options={{headerShown: false}}></Stack.Screen>
          ) : (
            <Stack.Screen
              name="Bottom Nav Screen"
              component={BottomNavScreen}
              options={{headerShown: false}}></Stack.Screen>
          )}

          <Stack.Screen
            name="Signup Screen"
            component={SignupScreen}
            options={{
              headerBackTitleVisible: false,
              headerTransparent: true,
              title: '',
              headerTintColor: 'black',
            }}></Stack.Screen>

          <Stack.Screen
            name="Otp Screen"
            component={OtpScreen}
            options={{
              headerBackTitleVisible: false,
              headerTransparent: true,
              title: '',
              headerTintColor: 'black',
            }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
