import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Platform,
} from 'react-native';
import {Colors, resHeight, resWidth} from '../../utils';
import {Header} from './../../components/';

const UserProfile = ({navigation}) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.navigate('Doctors')} title="Profile" />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'android' ? resHeight(0) : resHeight(35),
  },
});
