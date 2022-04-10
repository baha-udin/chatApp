import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Colors, resWidth, resHeight} from '../../../utils';
import Gap from '../Gap';

const Input = ({label, placeholder, secureTextEntry, value, onChangeText}) => {
  const [border, setBorder] = useState(Colors.border);
  const handleOnFocus = () => {
    setBorder(Colors.tertiary);
  };

  const handleOnBlur = () => {
    setBorder(Colors.border);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={resHeight(4)} />
      <TextInput
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        placeholder={placeholder}
        style={styles.textInput(border)}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
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
  textInput: border => ({
    borderRadius: 10,
    borderWidth: 1,
    borderColor: border,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: resWidth(14),
    color: Colors.secondary,
  }),
});
