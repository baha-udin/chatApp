import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {colors} from '../../utils';
import {ILGetStarted} from '../../assets/illustration';

const GetStarted = () => {
  return (
    <View style={styles.wrapPage}>
      <ImageBackground
        source={ILGetStarted}
        resizeMode="cover"
        style={styles.ImageBackground}></ImageBackground>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  wrapPage: {
    backgroundColor: 'white',
    flex: 1,
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
});
