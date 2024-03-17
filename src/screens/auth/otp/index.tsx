import {View, Image, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Snackbar from 'react-native-snackbar';

import {styles} from './style';
import {Colors} from '../../../utils/const_color';
import LoginButton from '../login/components/login_button';
import OtpInputField from './component';
import {registerUser} from '../../../data/apis/api';
import {RootState} from '../../../data/redux/store/store';
import {updateIsLoading} from '../../../data/redux/slice/register_slice';

const OtpScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const {otp, name, password, email} = route.params;

  const registerState = useSelector((state: RootState) => state.register);
  const dispatch = useDispatch();

  const registerUserAfterVerifyingOTP = async () => {

    if(registerState.otp.length == 0){
      Snackbar.show({
        text: 'Enter OTP to continue',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
      return ;
    }

    if (otp.toString() === registerState.otp) {
      dispatch(updateIsLoading());

      await registerUser({
        email: email,
        password: password,
        name: name,
        navigation: navigation,
      });

      dispatch(updateIsLoading());
    } else {
      Snackbar.show({
        text: 'OTP is wrong',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
      });
      return ;
    }
  };

  return (
    <View>
      <Image
        source={require('../../../assets/images/login.webp')}
        style={styles.imageStyle}
      />
      <View style={styles.padding}>
        <Text style={styles.boldTextStyle}>Enter OTP</Text>
        <View style={styles.sizedBox}></View>
        <Text
          style={{
            color: Colors.kSecondaryTextColor,
          }}>
          6 digit code has been sent to your Email Id
        </Text>
        <View style={{height: 16}}></View>
        <OtpInputField />
        <View style={{height: '30%'}}></View>
        {registerState.isLoading ? (
          <ActivityIndicator
            color={Colors.kSecondaryTextColor}
            style={{marginVertical: 16}}
          />
        ) : (
          <LoginButton
            text={'Submit'}
            onPress={registerUserAfterVerifyingOTP}
          />
        )}
      </View>
    </View>
  );
};

export default OtpScreen;
