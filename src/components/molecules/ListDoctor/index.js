import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {DummyDoctor2} from '../../../assets';
import {Colors, resWidth} from '../../../utils';

const ListDoctor = ({profilePicture, name, desc}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={profilePicture} style={styles.image} />
        <View style={styles.wrapTitle}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 50,
  },
  wrapTitle: {
    marginLeft: resWidth(12),
    justifyContent: 'center',
  },
  name: {
    fontSize: resWidth(16),
    fontWeight: '600',
    letterSpacing: 0.3,
    color: Colors.text.primary,
  },
  desc: {
    fontSize: resWidth(12),
    color: Colors.text.secondary,
    fontWeight: '300',
  },
});
