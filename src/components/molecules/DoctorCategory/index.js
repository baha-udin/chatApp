import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {ILCatUmum} from '../../../assets';
import {Colors, resHeight, resWidth} from '../../../utils';

const DoctorCategory = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <ILCatUmum style={styles.ilustrasion} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.jobs}>dokter umum</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: Colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: resWidth(10),
    width: resWidth(104),
    height: resHeight(130),
  },
  ilustrasion: {
    marginBottom: 20,
  },
  label: {
    fontSize: resWidth(12),
    fontWeight: '300',
  },
  jobs: {
    fontSize: resWidth(12),
    fontWeight: '500',
    letterSpacing: 0.1,
  },
});
