import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header, ButtonNav, Gap, Link} from './../../components';
import {ILEmptyPhoto, IconAddPhoto, IconRemovePhoto} from './../../assets';
import {resHeight, resWidth, Colors} from '../../utils';

const UploadPhoto = ({navigation, onPress, fullName, profession}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Upload Photo"
        onPress={() => navigation.navigate('Register')}
      />
      <View style={styles.content}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.avatarWrapper}>
            <Image source={ILEmptyPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </TouchableOpacity>
          <Gap height={24} />
          <Text style={styles.name}>Hilda arwana</Text>
          <Text style={styles.desc}>Product Engineer</Text>
        </View>
        <View style={styles.bottom}>
          <ButtonNav
            title="Upload & Continue"
            type="primary"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={resHeight(20)} />
          <Link
            onPress={() => navigation.replace('MainApp')}
            title="Skip for this"
            align="center"
            size={14}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? resHeight(0) : resHeight(20),
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: resHeight(40),
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 20,
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bottom: {
    justifyContent: 'center',
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  name: {
    fontSize: resWidth(24),
    fontWeight: '500',
    letterSpacing: 0.5,
    paddingBottom: 4,
    color: Colors.text.primary,
  },
  desc: {
    fontSize: resWidth(18),
    fontWeight: '300',
    color: Colors.text.secondary,
    letterSpacing: 0.2,
  },
});
