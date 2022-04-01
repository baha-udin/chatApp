import React from 'react';
import {StyleSheet, Text, View, useColorScheme, StatusBar} from 'react-native';
import {ILLogo} from '../../assets/illustration';
import {Input, Link, Gap, ButtonNav} from './../../components/atoms';
import {resHeight, resWidth} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.wrapPage}>
      <StatusBar barStyle="light-content" />
      <ILLogo />
      <Gap height={resHeight(40)} />
      <Text style={styles.title}>Masuk dan mulai {'\n'}berkonsultasi</Text>
      <Gap height={resHeight(40)} />
      <Input label="Email Address" placeholder="input your email" />
      <Gap height={resHeight(16)} />
      <Input label="Password" placeholder="input password" />
      <Gap height={resHeight(8)} />
      <Link title="Forgot My Password?" align="right" size={resWidth(12)} />
      <Gap height={resHeight(20)} />
      <ButtonNav
        type="primary"
        title="Login"
        onPress={() => navigation.navigate('Home')}
      />
      <Gap height={resHeight(30)} />
      <Link
        title="Create New Account"
        align="center"
        size={resWidth(16)}
        underline="underline"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapPage: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: resHeight(40),
    paddingHorizontal: resWidth(20),
  },
  title: {
    color: '#112340',
    fontSize: resWidth(25),
    fontWeight: '600',
    letterSpacing: 0.6,
  },
});
