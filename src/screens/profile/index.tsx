import {View, Text, Button} from 'react-native';
import {clearPersistent} from '../../data/persistent/persistent';

const ProfileScreen = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        onPress={() => {
          clearPersistent();
        }}
        title="Logout"
      />
    </View>
  );
};

export default ProfileScreen;
