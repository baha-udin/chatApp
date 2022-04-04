import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {resHeight, resWidth, fonts, Colors} from '../../../utils';
import {DummyUser} from './../../../assets/';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={DummyUser} style={styles.imgProfile} />
      </TouchableOpacity>
      <View style={styles.wrapUser}>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imgProfile: {width: 50, height: 50, borderRadius: 50},
  wrapUser: {
    marginLeft: resWidth(12),
    justifyContent: 'center',
  },
  name: {
    fontSize: resWidth(16),
    fontWeight: '600',
    color: Colors.text.primary,
  },
  profession: {
    marginTop: 2,
    fontSize: resWidth(12),
    fontWeight: '300',
    color: Colors.text.secondary,
  },
});
