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
import {
  resHeight,
  resWidth,
  Colors,
  localstorage,
  storeData,
} from '../../utils';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {ref, child, push, update, set} from 'firebase/database';
import {database, authentication} from './../../Config/Fire';

const UploadPhoto = ({navigation, route}) => {
  const [HasPhoto, setHasPhoto] = useState(false);
  const [Photo, setPhoto] = useState(ILEmptyPhoto);
  const {fullName, profession, uid, email} = route.params;
  const [photoForDB, setPhotoForDB] = useState('');

  const GetImage = () => {
    const Options = {
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 200,
      maxHeight: 200,
      includeBase64: true,
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
        const source = {uri: response.assets[0].uri};
        setPhotoForDB(
          `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
        );
        setPhoto(source);
        setHasPhoto(true);
      }
    });
  };

  const UploadandContinue = () => {
    update(ref(database, 'users' + '/' + uid + '/' + 'data'), {
      photo: Photo,
      uid: uid,
    });
    const data = route.params;
    data.photo = photoForDB;

    storeData('users', data);
    navigation.navigate('MainApp');
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
            <Image source={Photo} style={styles.imageProfile} />
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
            onPress={UploadandContinue}
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
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
