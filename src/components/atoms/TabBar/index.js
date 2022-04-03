import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {resHeight, resWidth, Colors} from './../../../utils';
import {
  IconDoctorActive,
  IconDoctor,
  IconMessagesActive,
  IconMessages,
  IconHospitalsActive,
  IconHospitals,
} from '../../../assets/icon';

const TabBar = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctors') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalsActive /> : <IconHospitals />;
    }
    return <IconDoctor />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.textLabel(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: resHeight(8),
    paddingHorizontal: resWidth(30),
  },
  textLabel: active => ({
    fontSize: resWidth(10),
    marginTop: resHeight(4),
    color: active ? Colors.text.menuActive : Colors.text.menuInactive,
  }),
});
