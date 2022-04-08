import React from 'react';
import {StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import {Header, List} from './../../components';
import {resWidth, resHeight} from '../../utils';
import {DummyDoctor1} from '../../assets';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Pilih Dokter"
        type="dark"
        onPress={() => navigation.navigate('MainApp', {screen: 'Doctor'})}
      />
      <List
        type="next"
        profilePicture={DummyDoctor1}
        name="Jessica"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profilePicture={DummyDoctor1}
        name="Jessica"
        desc="Wanita"
      />
      <List
        type="next"
        profilePicture={DummyDoctor1}
        name="Jessica"
        desc="Wanita"
      />
      <List
        type="next"
        profilePicture={DummyDoctor1}
        name="Jessica"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 0 : 35,
  },
});
