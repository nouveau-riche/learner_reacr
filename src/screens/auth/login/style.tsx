import { StyleSheet } from "react-native";

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
    textInputStyle: {
      flex: 1,
      marginVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor: Colors.kTextFieldIconColor,
      marginLeft: 10,
      paddingBottom: 4,
    },
    sepratorStyle: {
      width: '40%',
      height: 1,
      backgroundColor: Colors.kTextFieldIconColor,
      marginTop: 8,
    },
  });