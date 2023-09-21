import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PostScreen from '../screens/PostScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BottomTabNavigation from './BottomTabNavigation';

export type RootStackParams = {
  Profile: any;
  Home: any;
  Post: any;
  BottomTab: any;
};
const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="BottomTab"
          options={{headerShown: false}}
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Post"
          options={{headerShown: false}}
          component={PostScreen}
        />
        <Stack.Screen
          name="Profile"
          options={{headerShown: false}}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
