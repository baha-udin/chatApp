import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors, resHeight, resWidth} from '../../../utils';
import ButtonIconSend from './ButtonIconSend';

const ButtonNav = ({onPress, title, type, disable}) => {
  if (type === 'btn-icon-send') {
    return <ButtonIconSend disable={disable} />;
  }
  if (disable) {
    return (
      <TouchableOpacity style={styles.disabledButton}>
        <View>
          <Text style={styles.titleDisable}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
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
    paddingVertical: resHeight(11),
    justifyContent: 'center',
<<<<<<< HEAD
    backgroundColor: type === 'disable' ? Colors.border : Colors.primary,
=======
    backgroundColor: type === 'secondary' ? Colors.white : Colors.primary,
>>>>>>> feature
    borderRadius: 10,
    alignItems: 'center',
    outline: 'none',
  }),
  disabledButton: {
    paddingVertical: resHeight(11),
    justifyContent: 'center',
    backgroundColor: Colors.button.disable.background,
    borderRadius: 10,
    alignItems: 'center',
    outline: 'none',
  },
  titleDisable: {
    color: Colors.button.disable.text,
    fontSize: resWidth(16),
    fontWeight: '400',
    letterSpacing: 0.6,
  },
  title: type => ({
<<<<<<< HEAD
    color: type === 'disable' ? Colors.secondary : Colors.white,
=======
    color: type === 'secondary' ? Colors.secondary : Colors.white,
>>>>>>> feature
    fontSize: resWidth(16),
    fontWeight: '400',
    letterSpacing: 0.6,
  }),
});
