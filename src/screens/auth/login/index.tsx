import {View, Image, Text, TextInput, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useRef} from 'react';

import {styles} from './style';
import {Colors} from '../../../utils/const_color';
import LoginButton from './components/login_button';
import {
  updateEmail,
  updateIsLoading,
  updatePassword,
} from '../../../data/redux/slice/login_slice';
import {RootState} from '../../../data/redux/store/store';
import {loginUserApi} from '../../../data/apis/api';
import Snackbar from 'react-native-snackbar';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const passwordFocus = useRef<TextInput | null>(null);

  const loginState = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  const onSubmitUser = async () => {
    // verify email with regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(loginState.email)) {
      Snackbar.show({
        text: 'Enter a valid email',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
      return;
    }

    // verify password
    if (loginState.password.length < 6) {
      Snackbar.show({
        text: 'Password should be of atleast 6 characters',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
      return;
    }

    // start loading
    dispatch(updateIsLoading());

    await loginUserApi({
      email: loginState.email,
      password: loginState.password,
      navigation: navigation,
    });

    dispatch(updateIsLoading());
  };

  return (
    <View>
      <Image
        source={require('../../../assets/images/login.webp')}
        style={styles.imageStyle}
      />
      <View style={styles.padding}>
        <Text style={styles.boldTextStyle}>Login</Text>
        <View style={styles.sizedBox}></View>
        <Text
          style={{
            color: Colors.kSecondaryTextColor,
          }}>
          Hi there, nice to see you again
        </Text>
        <View style={{height: 16}}></View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../assets/icons/bio.webp')}
            style={styles.textFieldIcon}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="Email"
            placeholderTextColor={Colors.kHintTextColor}
            cursorColor={Colors.oliveColor}
            inputMode="email"
            keyboardType="email-address"
            onChangeText={value => {
              dispatch(updateEmail(value));
            }}
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordFocus?.current?.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../assets/icons/password.webp')}
            style={styles.textFieldIcon}
          />
          <TextInput
            ref={passwordFocus}
            style={styles.textInputStyle}
            placeholder="Password"
            placeholderTextColor={Colors.kHintTextColor}
            cursorColor={Colors.oliveColor}
            secureTextEntry={true}
            returnKeyType="done"
            onChangeText={value => {
              dispatch(updatePassword(value));
            }}
          />
        </View>
        <Text style={{textAlign: 'right', color: Colors.kHintTextColor}}>
          Forgot Password?
        </Text>
        <View style={{height: 24}}></View>
        {loginState.isLoading ? (
          <ActivityIndicator
            color={Colors.kSecondaryTextColor}
            style={{marginVertical: 16}}
          />
        ) : (
          <LoginButton text={'Submit'} onPress={onSubmitUser} />
        )}
        <View style={{flexDirection: 'row', marginTop: 12, marginBottom: 12}}>
          <View style={[styles.sepratorStyle, {marginRight: 24}]}></View>
          <Text style={{color: Colors.kSecondaryTextColor}}>OR</Text>
          <View style={[styles.sepratorStyle, {marginLeft: 24}]}></View>
        </View>

        <LoginButton
          text={'Create New Profile'}
          onPress={() => {
            navigation.navigate('Signup Screen');
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
