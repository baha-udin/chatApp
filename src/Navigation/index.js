import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Splash,
  GetStarted,
  Login,
  Register,
  Doctors,
  Hospitals,
  Messages,
  UserProfile,
  ChooseDoctor,
  Chatting,
} from '../Pages';
import {BottomNavigation} from '../components/molecules';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigation {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="Doctors">
      <Tab.Screen component={Doctors} name="Doctors" headerShown={false} />
      <Tab.Screen component={Messages} name="Messages" />
      <Tab.Screen component={Hospitals} name="Hospitals" />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainApp"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Splash} name="Splash" />
      <Stack.Screen component={MainApp} name="MainApp" />
      <Stack.Screen component={GetStarted} name="GetStarted" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={UserProfile} name="UserProfile" />
      <Stack.Screen component={ChooseDoctor} name="ChooseDoctor" />
      <Stack.Screen component={Chatting} name="Chatting" />
    </Stack.Navigator>
  );
};

export default Navigation;
