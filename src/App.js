import React from 'react';
import {StyleSheet, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './Navigation';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
