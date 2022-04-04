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
import {Colors, resWidth} from '../../utils';
import {Header} from './../../components/';

const UserProfile = ({navigation}) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header onPress={() => navigation.navigate('Doctors')} />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'android' ? resWidth(0) : resWidth(35),
    paddingHorizontal: resWidth(16),
  },
});
