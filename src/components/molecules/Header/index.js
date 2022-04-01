import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Gap} from '../../atoms';
import {resHeight, resWidth} from '../../../utils';
import {IconBackDark} from './../../../assets/icon';

const Header = ({onPressBack}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressBack}>
        <IconBackDark />
      </TouchableOpacity>
      <Text style={styles.textHeader}>Daftar Akun</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textHeader: {
    color: '#112340',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.4,
    flex: 1,
    textAlign: 'center',
  },
});
