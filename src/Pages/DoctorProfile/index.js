import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {ButtonNav, Gap, Header, Profile} from '../../components';
import ProfileItem from '../../components/molecules/ProfileItem';
import {resHeight, resWidth} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Doctor Profile"
        onPress={() => navigation.navigate('MainApp', {screen: 'Doctors'})}
      />
      <View style={styles.content}>
        <Profile name="Nairobi Putri Hizkia" desc="Dokter Anak" />
        <Gap height={24} />
        <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
        <Gap height={16} />
        <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
        <Gap height={16} />
        <ProfileItem label="No. STR" value="0000116622081996" />
        <View style={styles.wrapAction}>
          <ButtonNav title="Start Consultation" type="primary" />
        </View>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? resHeight(0) : resHeight(20),
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: resHeight(20),
  },
  content: {
    paddingHorizontal: 20,
  },
  wrapAction: {
    padding: 40,
    paddingTop: 24,
  },
});
