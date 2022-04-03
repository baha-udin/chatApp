import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors, resHeight, resWidth} from '../../../utils';

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
    backgroundColor: type === 'primary' ? Colors.primary : Colors.white,
    borderRadius: 10,
    alignItems: 'center',
    outline: 'none',
  }),
  title: type => ({
    color: type === 'primary' ? Colors.white : Colors.secondary,
    fontSize: resWidth(16),
    fontWeight: '400',
    letterSpacing: 0.6,
  }),
});
