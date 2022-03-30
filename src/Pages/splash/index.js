import React, {useEffect} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Colors from '../../utils';
import {ILLogo} from '../../assets/illustration';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 4000);

  return (
    <View style={styles.wrap}>
      <Image source={ILLogo} style={{width: 100, height: 100}} />
      <Text>MY Doctor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Splash;
