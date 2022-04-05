import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ILCatObat, ILCatPsikiater, ILCatUmum} from '../../../assets';
import {Colors, resHeight, resWidth} from '../../../utils';
import {Gap} from '../../atoms';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'dokter obatmum') {
      return <ILCatUmum style={styles.illustration} />;
    }
    if (category === 'psikiater') {
      return <ILCatPsikiater style={styles.illustration} />;
    }
    if (category === 'dokter obat') {
      return <ILCatObat style={styles.illustration} />;
    }
    return <ILCatUmum style={styles.illustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
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
    height: resHeight(140),
  },
  illustration: {
    marginBottom: resHeight(12),
  },
  label: {
    fontSize: resWidth(12),
    fontWeight: '300',
    color: Colors.text.primary,
  },
  category: {
    fontSize: resWidth(12),
    fontWeight: '500',
    letterSpacing: 0.1,
    color: Colors.text.primary,
  },
});
