import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {DummyDoctor1, IconStar} from '../../../assets';
import {resWidth, Colors, resHeight} from '../../../utils';

const RatedDoctor = ({onPress, name, desc, avatar}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={avatar} style={styles.imgDoctor} />
        <View style={styles.doctor}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.category}>{desc}</Text>
        </View>
        <View style={styles.rate}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: resHeight(16),
  },
  imgDoctor: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  doctor: {
    marginLeft: resWidth(12),
    flex: 1,
  },
  name: {
    fontSize: resWidth(16),
    fontWeight: '600',
    color: Colors.text.primary,
  },
  category: {
    fontSize: resWidth(12),
    fontWeight: '400',
    color: Colors.text.secondary,
    marginTop: 2,
  },
  rate: {
    flexDirection: 'row',
  },
});
