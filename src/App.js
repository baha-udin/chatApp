import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
