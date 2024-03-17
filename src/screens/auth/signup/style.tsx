import {StyleSheet} from 'react-native';

import {Colors} from '../../../utils/const_color';

export const styles = StyleSheet.create({
  padding: {
    padding: 20,
  },
  sizedBox: {
    height: 10,
  },
  textFieldIcon: {
    height: 20,
    width: 16,
    resizeMode: 'contain',
    paddingTop: 54,
    tintColor: Colors.kSecondaryTextColor,
  },
  imageStyle: {
    height: '42%',
    width: '100%',
    resizeMode: 'cover',
  },
  boldTextStyle: {
    fontWeight: '600',
    fontSize: 20,
  },
  inputStyle: {
    flex: 1,
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.kTextFieldIconColor,
    marginLeft: 10,
    paddingBottom: 4,
  },
  sepratorStyle: {
    marginTop: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
