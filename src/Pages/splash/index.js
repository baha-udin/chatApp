import React, {useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';
import Colors, {resHeight} from '../../utils';
import {ILLogo} from '../../assets/illustration';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('GetStarted');
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
    backgroundColor: '#F1F3F4',
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
  },
});

export default Splash;
