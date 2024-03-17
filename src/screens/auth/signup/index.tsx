import {
  View,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

import {styles} from './style';
import {Colors} from '../../../utils/const_color';
import LoginButton from '../login/components/login_button';
import {checkEmailRegister} from '../../../data/apis/api';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../data/redux/store/store';
import {
  updateEmail,
  updateIsLoading,
  updateName,
  updatePassword,
} from '../../../data/redux/slice/register_slice';

const SignupScreen = ({navigation}: {navigation: any}) => {
  const registerState = useSelector((state: RootState) => state.register);
  const dispatch = useDispatch();

  const validateName = () => {
    console.log('name:', registerState.name);

    if (registerState.name.length > 0) {
      return true;
    } else {
      Snackbar.show({
        text: 'Enter valid name',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
      return false;
    }
  };

  const validateEmail = () => {
    console.log('email:', registerState.email);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(registerState.email)) {
      return true;
    } else {
      Snackbar.show({
        text: 'Enter a valid email',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
      return false;
    }
  };

  const validatePassword = () => {
    console.log('password:', registerState.password);

    if (registerState.password.length >= 6) {
      return true;
    } else {
      Snackbar.show({
        text: 'Password should be of atleast 6 characters',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
      return false;
    }
  };

  const onSubmitUser = async () => {
    if (!validateName()) return;
    if (!validateEmail()) return;
    if (!validatePassword()) return;

    dispatch(updateIsLoading());

    await checkEmailRegister({
      email: registerState.email,
      name: registerState.password,
      password: registerState.name,
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
        <Text style={styles.boldTextStyle}>Create Profile</Text>
        <View style={styles.sizedBox}></View>
        <Text
          style={{
            color: Colors.kSecondaryTextColor,
          }}>
          To create profile, Please fill these information
        </Text>
        <View style={{height: 16}}></View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../assets/icons/profile.webp')}
            style={styles.textFieldIcon}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            placeholderTextColor={Colors.kHintTextColor}
            cursorColor={Colors.oliveColor}
            onChangeText={value => {
              dispatch(updateName(value));
            }}
            returnKeyType="next"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../assets/icons/bio.webp')}
            style={styles.textFieldIcon}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            placeholderTextColor={Colors.kHintTextColor}
            cursorColor={Colors.oliveColor}
            inputMode="email"
            keyboardType="email-address"
            onChangeText={value => {
              dispatch(updateEmail(value));
            }}
            returnKeyType="next"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../assets/icons/password.webp')}
            style={styles.textFieldIcon}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor={Colors.kHintTextColor}
            cursorColor={Colors.oliveColor}
            secureTextEntry={true}
            onChangeText={value => {
              dispatch(updatePassword(value));
            }}
            returnKeyType="done"
          />
        </View>
        <View style={{height: 24}}></View>
        {registerState.isLoading ? (
          <ActivityIndicator
            color={Colors.kSecondaryTextColor}
            style={{marginVertical: 16}}
          />
        ) : (
          <LoginButton text={'Submit'} onPress={onSubmitUser} />
        )}
        <View style={styles.sepratorStyle}>
          <Text style={{color: Colors.kSecondaryTextColor}}>
            Already have a profile?
          </Text>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}>
            <Text style={{color: Colors.greenColor}}> Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
