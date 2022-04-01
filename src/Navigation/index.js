import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Splash, Home, GetStarted, Login, Register} from '../Pages';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Splash} name="Splash" />
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={GetStarted} name="GetStarted" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
    </Stack.Navigator>
  );
};

export default Navigation;
