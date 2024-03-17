import {StyleSheet, Text, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useDispatch, useSelector} from 'react-redux';

import {Colors} from '../../../../utils/const_color';
import {RootState} from '../../../../data/redux/store/store';
import {updateOtp} from '../../../../data/redux/slice/register_slice';

const OtpInputField = () => {
  const otpState = useSelector((state: RootState) => state.register.otp);
  const dispatch = useDispatch();

  // const ref = useBlurOnFulfill({otpState, cellCount: 6});
  // const [props, getCellOnLayoutHandler] = useClearByFocusCell({
  //   value,
  //   setValue,
  // });

  return (
    <View>
      <CodeField
        // ref={ref}
        // {...props}
        value={otpState}
        onChangeText={(value: string) => dispatch(updateOtp(value))}
        cellCount={6}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            // onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  );
};

export default OtpInputField;

const styles = StyleSheet.create({
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 33,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: Colors.kTextFieldIconColor,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: Colors.greenColor,
  },
});
