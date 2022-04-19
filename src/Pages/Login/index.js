import React, {useState} from 'react';
import {StyleSheet, Text, View, useColorScheme, StatusBar} from 'react-native';
import {ILLogo} from '../../assets/illustration';
import {Input, Link, Gap, ButtonNav} from './../../components/atoms';
import {resHeight, resWidth, Colors} from '../../utils';
import {UseForm} from '../../utils';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [text, setText] = useState('Login');

  const onLogin = () => {
    if (form.email === '' || form.password === '') {
      showMessage({
        message: 'data masih ada yang kosong',
        type: 'default',
        Color: 'white',
        backgroundColor: Colors.error,
      });
    } else {
      setText('Sedang memproses');
      console.log(form.email, 'masuk');
      setText('Login');
    }
  };

  return (
    <View style={styles.wrapPage}>
      <StatusBar barStyle="light-content" />
      <ILLogo />
      <Gap height={resHeight(40)} />
      <Text style={styles.title}>Masuk dan mulai {'\n'}berkonsultasi</Text>
      <Gap height={resHeight(40)} />
      <Input
        value={form.email}
        onChangeText={value => setForm('email', value)}
        label="Email Address"
        placeholder="input your email"
      />
      <Gap height={resHeight(16)} />
      <Input
        value={form.password}
        onChangeText={value => setForm('password', value)}
        label="Password"
        placeholder="input password"
        secureTextEntry={true}
      />
      <Gap height={resHeight(8)} />
      <Link title="Forgot My Password?" align="right" size={resWidth(12)} />
      <Gap height={resHeight(20)} />
      <ButtonNav type="primary" title={text} onPress={onLogin} />
      <Gap height={resHeight(30)} />
      <Link
        title="Create New Account"
        align="center"
        size={resWidth(16)}
        underline="underline"
        onPress={() => navigation.navigate('Register')}
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
