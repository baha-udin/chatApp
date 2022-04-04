import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {ListHospital} from '../../components';
import {Colors, resHeight, resWidth} from '../../utils';
import {ILHospitalBG} from './../../assets';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
} from '../../assets/dummy';

const Hospitals = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDark ? 'default' : 'dark-content'}
        backgroundColor="transparent"
      />
      <ImageBackground source={ILHospitalBG} style={styles.bgImage}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.totalPlace}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <ListHospital
            picture={DummyHospital1}
            name="Rumah Sakit Citra Bunga Merdeka"
            address="Jln. Surya Sejahtera no. 20"
          />
          <ListHospital
            picture={DummyHospital2}
            name="Rumah Sakit Anak Happy Familly"
            address="Jln. Surya Sejahtera no. 20"
          />
          <ListHospital
            picture={DummyHospital3}
            name="Rumah Sakit Siloam Hospital"
            address="Jln. Surya Sejahtera no. 20"
          />
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
