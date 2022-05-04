import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Gap, IconOnly} from '../../atoms';
import {Colors, resHeight, resWidth} from '../../../utils';
import {IconBackDark, IconBackLight} from './../../../assets/icon';
import DarkProfile from './DarkProfile';

const Header = ({onPress, title, type, desc}) => {
  const Icon = () => {
    if (type === 'normal') {
      return <IconBackDark />;
    }
    if (type === 'dark') {
      return <IconBackLight />;
    }
    return <IconBackDark />;
  };
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} title={title} desc={desc} />;
  }
  return (
    <View style={styles.container(type)}>
      <TouchableOpacity onPress={onPress}>
        <Icon />
      </TouchableOpacity>
      <Text style={styles.textHeader(type)}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    flexDirection: 'row',
    paddingVertical: Platform.OS === 'android' ? resHeight(20) : resHeight(20),
    backgroundColor: type === 'dark' ? Colors.secondary : Colors.white,
    alignItems: 'center',
    paddingHorizontal: resWidth(16),
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  image: {width: 24, height: 24},
  textHeader: type => ({
    color: type === 'dark' ? Colors.white : '#112340',
    fontSize: resWidth(20),
    fontWeight: '600',
    letterSpacing: 0.4,
    flex: 1,
    textAlign: 'center',
    marginLeft: -20,
  }),
});
