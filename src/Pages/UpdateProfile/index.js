import React from 'react';
import {StyleSheet, Text, ScrollView, View, Platform} from 'react-native';

import {Profile, Header, Input, ButtonNav, Gap} from '../../components';
import {resHeight, resWidth} from '../../utils';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Edit Profile"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Gap height={16} />
        <Profile />
        <Gap height={26} />
        <Input label="Full name" />
        <Gap height={24} />
        <Input label="pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" secureTextEntry={true} />
        <Gap height={40} />
        <ButtonNav title="Save Profile" type="primary" />
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? resHeight(0) : resHeight(20),
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: resHeight(20),
  },
  content: {
    paddingHorizontal: resWidth(30),
  },
});
