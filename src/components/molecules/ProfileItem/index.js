import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../utils';

const ProfileItem = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    padding: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.text.subTitle,
    letterSpacing: 0.2,
    paddingBottom: 8,
  },
  value: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.text.primary,
    letterSpacing: 0.2,
  },
});
