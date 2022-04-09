import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Header} from './../../components/molecules';
import {Input, Gap, ButtonNav, Link} from './../../components/atoms';
import {resHeight, resWidth} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.navigate('GetStarted')}
        title="Register"
      />
      <Gap height={resHeight(16)} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={resHeight(16)} />
        <Input label="Pekerjaan" />
        <Gap height={resHeight(16)} />
        <Input label="Email Address" />
        <Gap height={resHeight(16)} />
        <Input label="Password" secureTextEntry={true} />
        <Gap height={resHeight(16)} />
        <ButtonNav
          type="primary"
          title="Register"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
        <Gap height={resHeight(30)} />
        <Link
          title="Do you have an Account? Login here"
          align="center"
          size={resWidth(16)}
          underline="underline"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? resHeight(8) : resHeight(25),
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingHorizontal: resWidth(20),
  },
});
