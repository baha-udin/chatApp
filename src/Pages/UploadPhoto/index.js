import React, {useState, useEffect} from 'react';
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
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const UploadPhoto = ({navigation, onPress, fullName, profession}) => {
  const [HasPhoto, setHasPhoto] = useState(false);
  const [Photo, setPhoto] = useState(ILEmptyPhoto);

  const GetImage = () => {
    const Options = {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 250,
      maxHeight: 250,
    };
    launchImageLibrary(Options, response => {
      console.log('hasil', response);

      if (response.didCancel) {
        showMessage({
          message: 'gagal mengambil gambar',
          type: 'default',
          Color: 'white',
          backgroundColor: Colors.error,
        });
      } else if (response.error) {
        showMessage({
          message: 'gagal mengambil gambar',
          type: 'default',
          Color: 'white',
          backgroundColor: Colors.error,
        });
        console.log('ImagePicker Error: ', response.error);
      } else {
        const dataImage = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        const source = {uri: response.assets[0].uri};
        setPhoto(source);
        setHasPhoto(true);
      }
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
            <Image
              source={Photo}
              style={{width: 100, height: 100, borderRadius: 50}}
            />
            {/* style={styles.avatar} */}
            {HasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!HasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Gap height={24} />
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.desc}>{profession}</Text>
        </View>
        <View style={styles.bottom}>
          <ButtonNav
            title="Upload & Continue"
            disable={!HasPhoto}
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
