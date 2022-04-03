import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Colors, resWidth, resHeight} from '../../../utils';
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
    color: Colors.secondary,
    fontSize: resWidth(16),
    fontWeight: '400',
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: resWidth(14),
    color: Colors.secondary,
  },
});
