import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import {Colors} from '../../../utils';
import {ButtonNav} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="silahkan kirim pesan"
        placeholderTextColor="#000"
        style={styles.textInput}
      />
      <ButtonNav title="Send" type="btn-icon-send" disable={false} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderRadius: 10,
    padding: 14,
    backgroundColor: Colors.disable,
    flex: 1,
    marginRight: 10,
    color: Colors.text.primary,
    fontSize: 14,
    letterSpacing: 0.4,
    fontWeight: '300',
  },
});
