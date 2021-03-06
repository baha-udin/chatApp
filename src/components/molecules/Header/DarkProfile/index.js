import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {resWidth, resHeight, Colors} from '../../../../utils';
import {IconBackDark, IconBackLight, DummyDoctor11} from '../../../../assets';

const DarkProfile = ({onPress, title, type, desc}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IconBackLight />
      </TouchableOpacity>
      <View style={styles.wrapText}>
        <Text style={styles.name}>Naila</Text>
        <Text style={styles.profesion}>Dokter Umum</Text>
      </View>
      <Image source={DummyDoctor11} style={styles.doctorImage} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: resHeight(16),
    paddingHorizontal: resWidth(16),
    backgroundColor: Colors.secondary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.white,
    letterSpacing: 0.2,
  },
  profesion: {
    marginTop: 2,
    fontSize: 14,
    color: Colors.text.subTitle,
    fontWeight: '400',
  },
  doctorImage: {
    width: 46,
    height: 46,
    borderRadius: 50,
  },
});
