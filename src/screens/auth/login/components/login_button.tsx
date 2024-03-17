import {Pressable, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginButton = ({text, onPress}: {text: string; onPress: Function}) => {
  return (
    <Pressable
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1, width: '100%'}]}
      onPress={() => onPress()}>
      <LinearGradient
        colors={['rgba(153,223,82,1)', 'rgba(88,178,73,1)']}
        style={styles.gradientStyle}>
        <Text style={styles.textStyle}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  gradientStyle: {
    height: 45,
    width: '60%',
    backgroundColor: 'green',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 16,
    elevation: 10,
  },
  textStyle: {color: 'white', fontWeight: 'bold', fontSize: 16},
});

export default LoginButton;
