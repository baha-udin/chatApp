import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {resHeight, resWidth, fonts, Colors, localstorage} from '../../../utils';
import {getData, storeData} from '../../../utils';
import {DummyUser, ILEmptyPhoto} from './../../../assets/';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILEmptyPhoto,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('users').then(response => {
      console.log('Data user', response);
      const data = response;
      data.photo = {uri: resHeight.photo.uri};
      setProfile(response);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.imgProfile} />
      <View style={styles.wrapUser}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
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
    textTransform: 'capitalize',
    letterSpacing: 0.6,
  },
  profession: {
    marginTop: 2,
    fontSize: resWidth(12),
    fontWeight: '300',
    color: Colors.text.secondary,
    textTransform: 'capitalize',
    letterSpacing: 0.4,
  },
});
