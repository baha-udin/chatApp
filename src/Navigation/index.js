import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Splash, Home, GetStarted} from '../Pages';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Splash} name="Splash" />
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={GetStarted} name="GetStarted" />
    </Stack.Navigator>
  );
};

export default Navigation;
