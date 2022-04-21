import React, {useState} from 'react';
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
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const UploadPhoto = ({navigation, onPress, fullName, profession}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILEmptyPhoto);

  const GetImage = () => {
    launchImageLibrary({}, response => {
      // Same code as in above section!
      console.log('responsenya ', response);
      const source = {uri: response.assets.uri};
      setPhoto(source);
    });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Upload Photo"
        onPress={() => navigation.replace('Register')}
      />
      <View style={styles.content}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={GetImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Gap height={24} />
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.desc}>{profession}</Text>
        </View>
        <View style={styles.bottom}>
          <ButtonNav
            title="Upload & Continue"
            disable={true}
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
