import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyDoctor9, IconRemovePhoto} from '../../../assets';
import {Colors, resWidth} from '../../../utils';

const Profile = ({name, desc}) => {
  return (
    <TouchableOpacity style={styles.Profile}>
      <View style={styles.wrapAvatar}>
        <Image source={DummyDoctor9} style={styles.avatar} />
        <IconRemovePhoto style={styles.removePhoto} />
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Profile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapAvatar: {
    width: 120,
    height: 120,
    borderColor: Colors.border,
    borderRadius: 130 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    marginTop: 16,
    fontSize: resWidth(20),
    fontWeight: '600',
    color: Colors.text.primary,
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  profession: {
    fontSize: resWidth(15),
    fontWeight: '400',
    color: Colors.text.secondary,
    letterSpacing: 0.2,
    marginTop: 2,
    textAlign: 'center',
  },
  removePhoto: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
});
