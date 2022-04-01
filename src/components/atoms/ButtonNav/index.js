import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from './../../../utils/colors';
import {resHeight, resWidth} from '../../../utils';

const ButtonNav = ({onPress, title, type}) => {
  return (
    <TouchableOpacity style={styles.wrapBtn(type)} onPress={onPress}>
      <View>
        <Text style={styles.title(type)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonNav;

const styles = StyleSheet.create({
  wrapBtn: type => ({
    paddingVertical: resHeight(12),
    justifyContent: 'center',
    backgroundColor: type === 'primary' ? '#0BCAD4' : 'white',
    borderRadius: 10,
    alignItems: 'center',
    outline: 'none',
  }),
  title: type => ({
    color: type === 'primary' ? '#ffff' : '#112340',
    fontSize: resWidth(16),
    fontWeight: '400',
    letterSpacing: 0.6,
  }),
});
