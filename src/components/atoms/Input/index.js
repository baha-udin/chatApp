import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {resWidth, resHeight} from '../../../utils';
import Gap from '../Gap';

const Input = ({label, placeholder, secureTextEntry}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={resHeight(4)} />
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: '#7E8797',
    fontSize: resWidth(16),
    fontWeight: '400',
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: resWidth(14),
    color: '#7D8797',
  },
});
