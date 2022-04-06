import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../../assets';
import {resHeight, resWidth, Colors} from '../../../../utils';

const ButtonIconSend = ({onPress, disable}) => {
  return (
    <TouchableOpacity style={styles.wrapBtn(disable)} onPress={onPress}>
      {disable && <IconSendDark style={styles.imgButton} />}
      {!disable && <IconSendLight style={styles.imgButton} />}
    </TouchableOpacity>
  );
};

export default ButtonIconSend;

const styles = StyleSheet.create({
  wrapBtn: disable => ({
    justifyContent: 'center',
    backgroundColor: disable ? Colors.disable : Colors.tertiary,
    borderRadius: 10,
    alignItems: 'center',
    outline: 'none',
    width: 45,
    height: 45,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
