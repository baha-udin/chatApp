import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
  ScrollView,
} from 'react-native';
import {ListHospital} from '../../components';
import {Colors, resHeight, resWidth} from '../../utils';
import {ILHospitalBG} from './../../assets';

const Hospitals = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ILHospitalBG} style={styles.bgImage}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.totalPlace}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
        </ScrollView>
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  bgImage: {
    height: 320,
    paddingTop: Platform.OS === 'ios' ? resHeight(45) : resHeight(30),
  },
  content: {
    paddingHorizontal: resWidth(16),
    paddingTop: resHeight(20),
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 24,
    borderColor: Colors.white,
    marginTop: -20,
  },
  title: {
    fontSize: resWidth(20),
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '600',
  },
  totalPlace: {
    fontSize: resWidth(14),
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '300',
    paddingTop: 6,
  },
});
