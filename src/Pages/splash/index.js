import React, {useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';
import {resHeight, resWidth} from '../../utils';
import {ILLogo} from '../../assets/illustration';
import {Colors} from './../../utils/colors';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('GetStarted');
  }, 1000);

  return (
    <SafeAreaView style={styles.wrap}>
      <ILLogo style={styles.imageSplash} />
      <Text style={styles.title}>Chat App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSplash: {
    resizeMode: 'contain',
  },
  title: {
    marginTop: resHeight(20),
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.6,
    color: Colors.text.primary,
  },
});

export default Splash;
