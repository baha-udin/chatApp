import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyDoctor2, IconNext} from '../../../assets';
import {Colors, resHeight, resWidth} from '../../../utils';

const ListDoctor = ({profilePicture, name, desc, type, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={profilePicture} style={styles.image} />
        <View style={styles.wrapTitle}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        {type === 'next' && <IconNext />}
      </View>
    </TouchableOpacity>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: resHeight(10),
    paddingHorizontal: resWidth(16),
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
    flex: 1,
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
