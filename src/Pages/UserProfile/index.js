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
import {Header, Profile, List, Gap} from './../../components/';

const UserProfile = ({navigation}) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDark ? 'default' : 'dark-content'}
        backgroundColor="transparent"
      />
      <Header
        onPress={() => navigation.navigate('MainApp', {screen: 'Doctors'})}
        title="Profile"
      />
      <Gap height={10} />
      <Profile />
      <Gap height={20} />
      <List
        name="Edit Profile"
        desc="Last day update"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        desc="Last day update"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="Last day update"
        type="next"
        icon="rate"
      />
      <List name="Help Center" desc="Last day update" type="next" icon="help" />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? resHeight(0) : resHeight(20),
    backgroundColor: 'white',
    flex: 1,
  },
});
