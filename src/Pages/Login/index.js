import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
  ScrollView,
} from 'react-native';
import {ILLogo} from '../../assets/illustration';
import {Input, Link, Gap, ButtonNav} from './../../components/atoms';
import {resHeight, resWidth, Colors} from '../../utils';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {authentication} from '../../Config/Fire';
import {signInWithEmailAndPassword} from 'firebase/auth';

import {UseForm} from '../../utils';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('Login');

  const onLogin = () => {
    // if (email === '' || password === '') {
    //   showMessage({
    //     message: 'data masih ada yang kosong',
    //     type: 'default',
    //     Color: 'white',
    //     backgroundColor: Colors.error,
    //   });
    //   setText(Login);
    // } else {
    setText('Sedang memproses...');
    console.log('email:', email, 'password:', password);

    signInWithEmailAndPassword(authentication, email, password)
      .then(success => {
        showMessage({
          message: 'Login berhasil',
          type: 'success',
          Color: 'white',
          backgroundColor: Colors.primary,
        });
        console.log(success);
        navigation.replace('MainApp');
        setText(Login);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
        showMessage({
          message: errorMessage,
          type: 'default',
          Color: 'white',
          backgroundColor: Colors.error,
        });
        setText('Login');
      });
    // }
  };

  return (
    <View style={styles.wrapPage}>
      <ILLogo />
      <Gap height={resHeight(40)} />
      <Text style={styles.title}>Masuk dan mulai {'\n'}berkonsultasi</Text>
      <Gap height={resHeight(40)} />
      <ScrollView>
        <Input
          label="Email Address"
          placeholder="input your email"
          onChangeText={value => setEmail(value)}
          value={email}
        />
        <Gap height={resHeight(16)} />
        <Input
          value={password}
          onChangeText={value => setPassword(value)}
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
      </ScrollView>
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
