import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {resWidth} from '../../../utils';

const Link = ({title, onPress, align, size, underline}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapLabel}>
      <Text style={styles.title(align, size, underline)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  wrapLabel: {},
  title: (align, size, underline) => ({
    fontSize: size,
    color: '#7D8797',
    fontWeight: '300',
    textAlign: align,
    textDecorationLine: underline,
  }),
});
