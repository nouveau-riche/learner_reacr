import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../home/index';
import MapScreen from '../map/index';
import AddPlaceScreen from '../add_place/index';
import ProfileScreen from '../profile/index';
import {Colors} from '../../utils/const_color';

const Tab = createBottomTabNavigator();

const BottomNavScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.greenColor},
        tabBarActiveTintColor: Colors.greenColor,
        tabBarInactiveTintColor: Colors.greenColor,
        tabBarLabelStyle: {fontWeight: '600'},
        title: 'THE ADVENTUROUS LEARNER',
        headerTitleStyle: {color: 'white'},
        headerRight: () => (
          <Image
            source={require('../../assets/icons/bell.webp')}
            style={styles.headerIcon}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('../../assets/icons/home_filled.webp')
                  : require('../../assets/icons/home.webp')
              }
              style={styles.tabrBarIconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('../../assets/icons/map_filled.webp')
                  : require('../../assets/icons/map.webp')
              }
              style={styles.tabrBarIconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Place"
        component={AddPlaceScreen}
        options={{
          tabBarLabel: 'Add Place',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('../../assets/icons/add_place_filled.webp')
                  : require('../../assets/icons/add_place.webp')
              }
              style={styles.tabrBarIconStyle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('../../assets/icons/profile_filled.webp')
                  : require('../../assets/icons/profile.webp')
              }
              style={styles.tabrBarIconStyle}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 20,
  },
  tabrBarIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});

export default BottomNavScreen;
